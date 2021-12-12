English

                            apertium-eng
===============================================================================

This is an Apertium monolingual language package for English. What
you can use this language package for:

* Morphological analysis of English
* Morphological generation of English
* Part-of-speech tagging of English

Requirements
===============================================================================

You will need the following software installed:

* lttoolbox (>= 3.3.0)
* apertium (>= 3.3.0)
* vislcg3 (>= 0.9.9.10297)

If this does not make any sense, we recommend you look at: apertium.org

Compiling
===============================================================================

Given the requirements being installed, you should be able to just run:

$ ./configure
$ make

You can use ./autogen.sh instead of ./configure if you're compiling
from SVN.

If you're doing development, you don't have to install the data, you
can use it directly from this directory.

If you are installing this language package as a prerequisite for an
Apertium translation pair, then do (typically as root / with sudo):

# make install

You can give a --prefix to ./configure to install as a non-root user,
but make sure to use the same prefix when installing the translation
pair and any other language packages.

Testing
===============================================================================

If you are in the source directory after running make, the following
commands should work:

$  echo "TODO: test sentence" | apertium -d . eng-morph
TODO: test analysis result

$ echo "TODO: test sentence" | apertium -d . eng-tagger
TODO: test tagger result

Files and data
===============================================================================

* apertium-eng.eng.dix            - Monolingual dictionary
* eng.prob                        - Tagger model
* apertium-eng.eng.rlx            - Constraint Grammar disambiguation rules
* apertium-eng.post-eng.dix       - Post-generator
* modes.xml                       - Translation modes

Notes on eng.prob
===============================================================================
apertium-eng uses the [perceptron tagger](https://wiki.apertium.org/wiki/Perceptron_tagger),
so in order for it to work, it needs to be called with -gx: `apertium-tagger -gx eng.prob`


For more information
===============================================================================

* https://wiki.apertium.org/wiki/Installation
* https://wiki.apertium.org/wiki/apertium-eng
* https://wiki.apertium.org/wiki/Using_an_lttoolbox_dictionary

Help and support
===============================================================================

If you need help using this language pair or data, you can contact:

* Mailing list: apertium-stuff@lists.sourceforge.net
* IRC: #apertium on irc.oftc.net

License
=======

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

See also the file AUTHORS included in this distribution.

