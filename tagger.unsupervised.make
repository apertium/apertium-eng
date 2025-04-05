###############################################################################
## Unsupervised tagger training
###############################################################################

LANG=eng
BASENAME=apertium-$(LANG)

TAGGER_UNSUPERVISED_ITERATIONS=8
TAGGERDIR=tagger-data

all: $(LANG).prob

$(LANG).prob: $(BASENAME).$(LANG).tsx $(TAGGERDIR)/$(LANG).dic $(TAGGERDIR)/$(LANG).crp
	apertium-validate-tagger $(BASENAME).$(LANG).tsx
	apertium-tagger -t $(TAGGER_UNSUPERVISED_ITERATIONS) \
                           $(TAGGERDIR)/$(LANG).dic \
                           $(TAGGERDIR)/$(LANG).crp \
                           $(BASENAME).$(LANG).tsx \
                           $(LANG).prob;

$(TAGGERDIR)/$(LANG).dic: $(BASENAME).$(LANG).dix $(LANG).automorf.bin
	@echo "Generating $@";
	@echo "This may take some time. Please, take a cup of coffee and come back later.";
	apertium-validate-dictionary $(BASENAME).$(LANG).dix
	apertium-validate-tagger $(BASENAME).$(LANG).tsx
	lt-expand $(BASENAME).$(LANG).dix | grep -v "__REGEXP__" | grep -v ":<:" |\
	awk 'BEGIN{FS=":>:|:"}{print $$1;}' | sed -e 's/@/\\@/g' > $(TAGGERDIR)/$(LANG).dic.expanded
	@echo "." >> $(TAGGERDIR)/$(LANG).dic.expanded
	@echo "?" >> $(TAGGERDIR)/$(LANG).dic.expanded
	@echo ";" >> $(TAGGERDIR)/$(LANG).dic.expanded
	@echo ":" >> $(TAGGERDIR)/$(LANG).dic.expanded
	@echo "!" >> $(TAGGERDIR)/$(LANG).dic.expanded
	@echo "42" >> $(TAGGERDIR)/$(LANG).dic.expanded
	@echo "," >> $(TAGGERDIR)/$(LANG).dic.expanded
	@echo "(" >> $(TAGGERDIR)/$(LANG).dic.expanded
	@echo "\\[" >> $(TAGGERDIR)/$(LANG).dic.expanded
	@echo ")" >> $(TAGGERDIR)/$(LANG).dic.expanded
	@echo "\\]" >> $(TAGGERDIR)/$(LANG).dic.expanded
	@echo "¿" >> $(TAGGERDIR)/$(LANG).dic.expanded
	@echo "¡" >> $(TAGGERDIR)/$(LANG).dic.expanded
	lt-proc -a $(LANG).automorf.bin < $(TAGGERDIR)/$(LANG).dic.expanded |\
	apertium-filter-ambiguity $(BASENAME).$(LANG).tsx > $@
	rm $(TAGGERDIR)/$(LANG).dic.expanded;

$(TAGGERDIR)/$(LANG).crp: $(LANG).automorf.bin $(TAGGERDIR)/$(LANG).crp.txt
	cat $(TAGGERDIR)/$(LANG).crp.txt | lt-proc $(LANG).automorf.bin > $(TAGGERDIR)/$(LANG).crp;

$(TAGGERDIR)/$(LANG).crp.txt: $(wildcard $(TAGGERDIR)/crp/*.txt)
	cat $(TAGGERDIR)/crp/*.txt > $@;

clean: 
	rm -f $(TAGGERDIR)/$(LANG).dic
	rm -f $(TAGGERDIR)/$(LANG).tagged
	rm -f $(TAGGERDIR)/$(LANG).tagged.txt
	rm -f $(TAGGERDIR)/$(LANG).untagged
	rm -f $(TAGGERDIR)/$(LANG).crp
	rm -f $(TAGGERDIR)/$(LANG).crp.txt
