###############################################################################
## Tagger
###############################################################################

LANG1=eng
BASENAME=apertium-$(LANG1)

TAGGER_SUPERVISED_ITERATIONS=0
TAGGERDIR=$(LANG1)-tagger-data

$(LANG1).prob: $(TAGGERDIR) $(BASENAME).$(LANG1).tsx $(TAGGERDIR)/$(LANG1).dic $(TAGGERDIR)/$(LANG1).untagged $(TAGGERDIR)/$(LANG1).tagged $(TAGGERDIR)/$(LANG1).crp
	apertium-validate-tagger $(BASENAME).$(LANG1).tsx
	apertium-tagger -s $(TAGGER_SUPERVISED_ITERATIONS) \
                            $(TAGGERDIR)/$(LANG1).dic \
                            $(TAGGERDIR)/$(LANG1).crp \
                            $(BASENAME).$(LANG1).tsx \
                            $(LANG1).prob \
                            $(TAGGERDIR)/$(LANG1).tagged \
                            $(TAGGERDIR)/$(LANG1).untagged;

$(TAGGERDIR):
	test -d $(TAGGERDIR) || mkdir $(TAGGERDIR)

$(TAGGERDIR)/$(LANG1).dic: $(BASENAME).$(LANG1).dix $(LANG1).automorf.bin
	@echo "Generating $@";
	@echo "This may take some time. Please, take a cup of coffee and come back later.";
	apertium-validate-dictionary $(BASENAME).$(LANG1).dix
	apertium-validate-tagger $(BASENAME).$(LANG1).tsx
	lt-expand $(BASENAME).$(LANG1).dix | grep -v "__REGEXP__" | grep -v ":<:" |\
	awk 'BEGIN{FS=":>:|:"}{print $$1 ".";}' | apertium-destxt -n >$(TAGGERDIR)/$(LANG1).dic.expanded
	@echo "." >>$(TAGGERDIR)/$(LANG1).dic.expanded
	@echo "?" >>$(TAGGERDIR)/$(LANG1).dic.expanded
	@echo ";" >>$(TAGGERDIR)/$(LANG1).dic.expanded
	@echo ":" >>$(TAGGERDIR)/$(LANG1).dic.expanded
	@echo "!" >>$(TAGGERDIR)/$(LANG1).dic.expanded
	@echo "42" >>$(TAGGERDIR)/$(LANG1).dic.expanded
	@echo "," >>$(TAGGERDIR)/$(LANG1).dic.expanded
	@echo "(" >>$(TAGGERDIR)/$(LANG1).dic.expanded
	@echo "\\[" >>$(TAGGERDIR)/$(LANG1).dic.expanded
	@echo ")" >>$(TAGGERDIR)/$(LANG1).dic.expanded
	@echo "\\]" >>$(TAGGERDIR)/$(LANG1).dic.expanded
	@echo "¿" >>$(TAGGERDIR)/$(LANG1).dic.expanded
	@echo "¡" >>$(TAGGERDIR)/$(LANG1).dic.expanded
	lt-proc -a $(LANG1).automorf.bin <$(TAGGERDIR)/$(LANG1).dic.expanded | \
	apertium-filter-ambiguity $(BASENAME).$(LANG1).tsx > $@
	rm $(TAGGERDIR)/$(LANG1).dic.expanded;

$(TAGGERDIR)/$(LANG1).crp: $(LANG1).automorf.bin $(TAGGERDIR)/$(LANG1).crp.txt
	apertium-destxt -n < $(TAGGERDIR)/$(LANG1).crp.txt | lt-proc $(LANG1).automorf.bin > $(TAGGERDIR)/$(LANG1).crp

$(TAGGERDIR)/$(LANG1).crp.txt:
	touch $(TAGGERDIR)/$(LANG1).crp.txt

$(TAGGERDIR)/$(LANG1).tagged:
	for f in $$(cat texts/TRAINING); do \
		if [ -e "$$f" ]; then \
			cat "$$f" >> $@; \
		else \
			cat "$$f" > $@; \
		fi \
	done

$(TAGGERDIR)/$(LANG1).tagged.txt: $(TAGGERDIR)/$(LANG1).tagged
	cat $< | cut -f2 -d'^' | cut -f1 -d'/' > $@

$(TAGGERDIR)/$(LANG1).untagged: $(TAGGERDIR)/$(LANG1).tagged.txt $(LANG1).automorf.bin
	cat $(TAGGERDIR)/$(LANG1).tagged.txt | apertium-destxt -n | lt-proc $(LANG1).automorf.bin  > $@

clean-local:
	-rm -rf $(TAGGERDIR)
