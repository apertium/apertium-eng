all:
	lt-comp lr apertium-eng.eng.dix eng.automorf.bin
	lt-comp rl apertium-eng.eng.dix eng.autogen.bin
	lt-comp rl apertium-eng.post-eng.dix eng.autopgen.bin
