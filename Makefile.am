###############################################################################
## Makefile for apertium-eng
###############################################################################

LANG1=eng
BASENAME=apertium-$(LANG1)

VAR1=#keep empty
VAR2=_US

TARGETS_COMMON =						\
		$(LANG1)$(VAR1).automorf.bin			\
		$(LANG1)$(VAR1).automorf.att.gz \
		$(LANG1)$(VAR1).autogen.bin			 \
		$(LANG1)$(VAR1).autogen.att.gz		  \
		$(LANG1)$(VAR1).autopgen.bin			\
		$(LANG1)$(VAR1).rlx.bin				 \
		$(LANG1)$(VAR2).autogen.bin			 \
		$(LANG1)$(VAR2).autopgen.bin

# Use this goal for creating .deps, otherwise make -j2 will give problems:
@ap_include@

###############################################################################
## English transducer
###############################################################################

$(LANG1)$(VAR1).autogen.bin: $(BASENAME).$(LANG1).dix .deps/.d
		apertium-validate-dictionary $<
		lt-comp -v eng rl $< $@ $(BASENAME).$(LANG1).acx

$(LANG1)$(VAR2).autogen.bin: $(BASENAME).$(LANG1).dix .deps/.d
		apertium-validate-dictionary $<
		lt-comp -v eng_US rl $< $@ $(BASENAME).$(LANG1).acx

$(LANG1).automorf.bin: $(BASENAME).$(LANG1).dix
	apertium-validate-dictionary $<
	lt-comp lr $< $@ $(BASENAME).$(LANG1).acx

$(LANG1).autogen.att.gz: $(LANG1).autogen.bin
	lt-print $< | gzip -9 -c -n > $@

$(LANG1).automorf.att.gz: $(LANG1).automorf.bin
	lt-print $< | gzip -9 -c -n > $@

$(LANG1)$(VAR1).autopgen.bin: $(BASENAME).post-$(LANG1).dix
		lt-comp -a eng lr $< $@

$(LANG1)$(VAR2).autopgen.bin: $(BASENAME).post-$(LANG1).dix
		lt-comp -a eng_US lr $< $@


###############################################################################
## Disambiguation rules
###############################################################################

$(LANG1).rlx.bin: $(BASENAME).$(LANG1).rlx
	cg-comp $< $@

###############################################################################
## Distribution
###############################################################################
EXTRA_DIST=$(BASENAME).$(LANG1).dix \
		$(BASENAME).$(LANG1).acx \
		$(BASENAME).$(LANG1).rlx \
		$(BASENAME).post-$(LANG1).dix \
		$(LANG1).prob \
		modes.xml

###############################################################################
## Installation stuff
###############################################################################
#
#   apertium_eng_dir: This is where the compiled binaries go
#   apertium_eng_srcdir: This is where the source files go

apertium_engdir=$(prefix)/share/apertium/$(BASENAME)/
apertium_eng_srcdir=$(prefix)/share/apertium/$(BASENAME)/

apertium_eng_DATA=$(TARGETS_COMMON) $(LANG1).prob

pkgconfigdir = $(prefix)/share/pkgconfig
pkgconfig_DATA = $(BASENAME).pc

# Modes are not installed since they're all just "debug modes". All
# modes are created by this goal.
modes/$(LANG1)-morph.mode: modes.xml
	apertium-validate-modes modes.xml
	apertium-gen-modes modes.xml

noinst_DATA=modes/$(LANG1)-morph.mode

install-data-local: install-modes
	test -d $(DESTDIR)$(apertium_eng_srcdir) || mkdir -p $(DESTDIR)$(apertium_eng_srcdir)
	$(INSTALL_DATA) $(BASENAME).$(LANG1).dix $(DESTDIR)$(apertium_eng_srcdir)
	$(INSTALL_DATA) $(BASENAME).$(LANG1).rlx $(DESTDIR)$(apertium_eng_srcdir)
	$(INSTALL_DATA) $(BASENAME).post-$(LANG1).dix $(DESTDIR)$(apertium_eng_srcdir)

CLEANFILES = $(TARGETS_COMMON)
clean-local:
	-rm -rf .deps modes

###############################################################################
## Test
###############################################################################

test: all
	apertium-regtest test
