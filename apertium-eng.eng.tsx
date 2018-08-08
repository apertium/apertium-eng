<?xml version="1.0" encoding="UTF-8"?>
<!--
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
-->
<tagger name="english">
  <tagset>
    <def-label name="TO" closed="true">
      <tags-item lemma="to" tags="pr"/>
    </def-label>
    <def-label name="FOR" closed="true">
      <tags-item lemma="for" tags="pr"/><!--MG. afegit 19-09-06. confon <pr> amb <cnjadv>, tb en altres cases ('en'). Caldria fer algo al respecte o potser amb un text etiquetat ho fa millor. -->
    </def-label>
    <def-label name="BY" closed="true">
      <tags-item lemma="by" tags="pr"/>
    </def-label>
    <def-label name="THATCNJ" closed="true">
      <tags-item lemma="that" tags="cnjsub"/>
    </def-label>
    <def-label name="NOT" closed="true">
      <tags-item lemma="not" tags="adv"/>
    </def-label>
    <def-label name="NOADV" closed="true">
      <tags-item lemma="no" tags="adv"/>
    </def-label>
    <def-label name="CANNOM" closed="true">
      <tags-item lemma="can" tags="n.*"/>
    </def-label>
    <def-label name="WILLNOM" closed="true">
      <tags-item lemma="will" tags="n.*"/>
    </def-label>
    <!-- <def-label name="THATPRN" closed="true">
	 <tags-item lemma="that" tags="prn.*"/>
	 </def-label> -->
    <def-label name="DOVBLEX" closed="true">
      <tags-item lemma="do" tags="vblex.inf"/>
      <tags-item lemma="do" tags="vblex.pres"/>
      <tags-item lemma="do" tags="vblex.pres.p3.sg"/>
      <tags-item lemma="do" tags="vblex.past"/>
    </def-label>

    <def-label name="VERBS_DISCURS" closed="true">
      <tags-item lemma="say" tags="vblex.pp"/>
      <tags-item lemma="explain" tags="vblex.pp"/>
      <tags-item lemma="add" tags="vblex.pp"/>
      <tags-item lemma="tell" tags="vblex.pp"/>
    </def-label>

    <def-label name="INTNOM" closed="true">
      <tags-item tags="prn.itg.*"/>
    </def-label>
    <def-label name="INTADV" closed="true">
      <tags-item tags="adv.itg"/>
    </def-label>
    <def-label name="PREADV" closed="true">
      <tags-item tags="preadv"/>
    </def-label>
    <def-label name="ADV">
      <tags-item tags="adv"/>
    </def-label>
    <def-label name="ADJ">
      <tags-item tags="adj"/>
      <tags-item tags="adj.comp"/>
      <tags-item tags="adj.sup"/>
      <tags-item tags="adj.sint"/>
      <tags-item tags="adj.sint.comp"/>
      <tags-item tags="adj.sint.sup"/>
    </def-label>
    <def-label name="ADJPOS" closed="true">
      <tags-item tags="adj.pos"/>
    </def-label>
    <def-label name="CNJSUBS" closed="true">
      <tags-item tags="cnjsub"/>
    </def-label>
    <def-label name="CNJCOORD" closed="true">
      <tags-item tags="cnjcoo"/>
    </def-label>
    <def-label name="CNJADV">
      <tags-item tags="cnjadv"/>
    </def-label>
    <def-label name="DET" closed="true">
      <tags-item tags="det.dem.*"/>
      <tags-item tags="det.ind.*"/>
      <tags-item tags="det.def.*"/>
      <tags-item tags="det.pos.*"/>
      <tags-item tags="det.itg.*"/>
    </def-label>
    <def-label name="DETQNT_ORD" closed="true"><!--Poden anar precedits dels altres tipus de determinant -->
      <tags-item tags="det.qnt.*"/>
      <tags-item tags="adj.ord"/>
    </def-label>

    <!--<def-label name="DETITG">
	<tags-item tags="det.itg.*"/>
	</def-label> -->

    <def-label name="NUM" closed="true">
      <tags-item tags="num.*"/>
      <tags-item tags="num"/>
    </def-label>
    <def-label name="NOMSG">
      <tags-item tags="n.sg"/>
      <tags-item tags="n.acr.sg"/>
      <tags-item tags="n.unc.sg"/>
      <tags-item tags="vblex.subs"/>
    </def-label>
    <def-label name="NOMPL">
      <tags-item tags="n.pl"/>
      <tags-item tags="n.acr.pl"/>
      <tags-item tags="n.unc.pl"/>
    </def-label>
    <def-label name="INTERJ">
      <tags-item tags="ij"/>
    </def-label>
    <def-label name="ANTROPONIM">
      <tags-item tags="np.ant.*"/>
      <tags-item tags="np.cog.*"/>
    </def-label>
    <def-label name="TOPONIM">
      <tags-item tags="np.top.*"/>
    </def-label>
    <def-label name="NPALTRES">
      <tags-item tags="np.al.*"/>
      <tags-item tags="np.org.*"/>
    </def-label>
    <def-label name="ABBR">
      <tags-item tags="abbr"/>
    </def-label>
    <def-label name="PREDET" closed="true">
      <tags-item tags="predet.*"/>
    </def-label>
    <def-label name="PREP" closed="true">
      <tags-item tags="pr"/>
    </def-label>
    <def-label name="PRNSUBJ" closed="true">
      <tags-item tags="prn.subj.*"/>
    </def-label>
    <def-label name="PRNOBJ" closed="true">
      <tags-item tags="prn.obj.*"/>
    </def-label>
    <def-label name="PRNALTRES" closed="true">
      <tags-item tags="prn.*"/>
    </def-label>
    <def-label name="VLEXPP">
      <tags-item tags="vblex.pp"/>
      <tags-item tags="vblex.sep.pp"/>
    </def-label>
    <def-label name="VSERPP" closed="true">
      <tags-item tags="vbser.pp"/>
    </def-label>
    <def-label name="VMODPP" closed="true">
      <tags-item tags="vbmod.pp"/>
    </def-label>
    <def-label name="VHAVEPP" closed="true">
      <tags-item tags="vbhaver.pp"/>
    </def-label><!--Aquest té sentit? l'auxiliar no té forma 'pp' no? -->

    <def-label name="PAST">
      <tags-item tags="vblex.past"/>
      <tags-item tags="vblex.sep.past"/>
      <tags-item tags="vbser.past"/>
      <tags-item tags="vbser.past.*"/>
    </def-label>
    <def-label name="VHAVEPAST" closed="true">
      <tags-item tags="vbhaver.past"/>
    </def-label>
    <def-label name="VMODPAST" closed="true">
      <tags-item tags="vbmod.past"/>
    </def-label>

    <def-label name="INF">
      <tags-item tags="vblex.inf"/>
      <tags-item tags="vblex.sep.inf"/>
      <tags-item tags="vbser.inf"/>
    </def-label>
    <def-label name="VHAVEINF" closed="true">
      <tags-item tags="vbhaver.inf"/>
    </def-label>
    <def-label name="VMODINF" closed="true">
      <tags-item tags="vbmod.inf"/>
    </def-label>
    <def-label name="PRES">
      <tags-item tags="vblex.pres"/>
      <tags-item tags="vblex.sep.pres"/>
      <tags-item tags="vbser.pres"/>
      <tags-item tags="vblex.pres.*"/>
      <tags-item tags="vblex.sep.pres.*"/>
      <tags-item tags="vbser.pres.*"/>
    </def-label>
    <def-label name="IMP">
      <tags-item tags="vblex.imp"/>
      <tags-item tags="vblex.sep.imp"/>
      <tags-item tags="vbser.imp"/>
    </def-label>
    <def-label name="VHAVEPRES" closed="true">
      <tags-item tags="vbhaver.pres"/>
      <tags-item tags="vbhaver.pres.*"/>
    </def-label>
    <def-label name="VMODPRES" closed="true">
      <tags-item tags="vbmod.pres"/>
      <tags-item tags="vbmod.pres.*"/>
    </def-label>

    <def-label name="VAUX" closed="true">
      <tags-item tags="vaux.inf"/>
      <tags-item tags="vaux.pres"/>
      <tags-item tags="vaux.pres.*"/>
      <tags-item tags="vaux.past"/>
      <tags-item tags="vbdo.inf"/>
      <tags-item tags="vbdo.pres"/>
      <tags-item tags="vbdo.pres.*"/>
      <tags-item tags="vbdo.past"/>
    </def-label>

    <def-label name="VMOD" closed="true">
      <tags-item tags="vbmod.inf"/>
      <tags-item tags="vbmod.pres"/>
      <tags-item tags="vbmod.pres.*"/>
      <tags-item tags="vbmod.past"/>
    </def-label>

    <def-label name="VDO" closed="true">
      <tags-item tags="vbdo.pres"/>
      <tags-item tags="vbdo.pres.*"/>
      <tags-item tags="vbdo.past"/>
    </def-label>

    <def-label name="GER"><!--Per ara no distingim entre 'ger'i 'pprs' i pq cal estudiar-ho amb atenció i fer restriccions. -->
      <tags-item tags="vblex.ger"/>
      <tags-item tags="vblex.sep.ger"/>
      <tags-item tags="vblex.pprs"/>
      <tags-item tags="vblex.sep.pprs"/>
      <tags-item tags="vbser.ger"/>
      <tags-item tags="vbser.pprs"/>
    </def-label>
    <def-label name="VHAVEGER" closed="true">
      <tags-item tags="vbhaver.ger"/>
      <tags-item tags="vbhaver.pprs"/>
    </def-label>
    <def-label name="VMODGER" closed="true">
      <tags-item tags="vbmod.ger"/>
      <tags-item tags="vbmod.pprs"/>
    </def-label>

    <def-label name="VLEX">
      <tags-item tags="vblex.*"/>
    </def-label>
    <def-label name="VHAVE" closed="true">
      <tags-item tags="vbhaver.*"/>
    </def-label>
    <def-label name="VSER" closed="true">
      <tags-item tags="vbser.*"/>
    </def-label>
    <def-label name="RELAN" closed="true">
      <tags-item tags="prn.rel.an.*"/>
    </def-label>
    <def-label name="RELNN" closed="true">
      <tags-item tags="prn.rel.nn.*"/>
    </def-label>
    <def-label name="RELADV" closed="true">
      <tags-item tags="rel.adv"/>
    </def-label>
    <def-label name="GEN" closed="true">
      <tags-item tags="gen"/>
    </def-label>
    <def-label name="GUIO" closed="true">
      <tags-item tags="guio"/>
    </def-label>
    <def-label name="APOS" closed="true">
      <tags-item tags="apos"/>
    </def-label>
    <def-mult name="DETPREADV" closed="true">
      <sequence>
	<tags-item tags="det.def.sp"/>
	<label-item label="PREADV"/>
      </sequence>
    </def-mult>
  </tagset>

  <forbid>
    <label-sequence>
      <label-item label="PRNALTRES"/>
      <label-item label="NOMSG"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNALTRES"/>
      <label-item label="NOMPL"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VHAVEPP"/>
      <label-item label="PAST"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VHAVEPP"/>
      <label-item label="INF"/>
    </label-sequence>
    <!--   <label-sequence> Ho trec perquè ja hi ha un enforce-after que fa el mateix
	 <label-item label="VHAVEPAST"/>
	 <label-item label="PAST"/>
	 </label-sequence>
	 <label-sequence>
	 <label-item label="VHAVEPAST"/>
	 <label-item label="INF"/>
	 </label-sequence>
	 <label-sequence>
	 <label-item label="VHAVEINF"/>
	 <label-item label="PAST"/>
	 </label-sequence>
	 <label-sequence>
	 <label-item label="VHAVEINF"/>
	 <label-item label="INF"/>
	 </label-sequence>
	 <label-sequence>
	 <label-item label="VHAVEPRES"/>
	 <label-item label="PAST"/>
	 </label-sequence>
	 <label-sequence>
	 <label-item label="VHAVEPRES"/>
	 <label-item label="INF"/>
	 </label-sequence>
	 <label-sequence>
	 <label-item label="VHAVE"/>
	 <label-item label="PAST"/>
	 </label-sequence>
	 <label-sequence>
	 <label-item label="VHAVE"/>
	 <label-item label="INF"/>
	 </label-sequence>-->

    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="VLEXPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="VERBS_DISCURS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="VSERPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="VMODPP"/>
    </label-sequence>

    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="INF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="VHAVEINF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="NOMSG"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="NOMPL"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="DET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="DETQNT_ORD"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="PREDET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="NUM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="VMODINF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREADV"/>
      <label-item label="PAST"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREADV"/>
      <label-item label="INF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREADV"/>
      <label-item label="PRES"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREADV"/>
      <label-item label="VAUX"/>
    </label-sequence>
    <label-sequence>
      <label-item label="SENT"/>
      <label-item label="RELAN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="SENT"/>
      <label-item label="RELNN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="SENT"/>
      <label-item label="RELADV"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELADV"/>
      <label-item label="VAUX"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELADV"/>
      <label-item label="PAST"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELADV"/>
      <label-item label="INF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELADV"/>
      <label-item label="PRES"/>
    </label-sequence>

    <label-sequence>
      <label-item label="RELAN"/>
      <label-item label="VLEXPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELAN"/>
      <label-item label="VSERPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELAN"/>
      <label-item label="VMODPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELAN"/>
      <label-item label="VHAVEPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELAN"/>
      <label-item label="VERBS_DISCURS"/>
    </label-sequence>
    <label-sequence><!--no estic segura que aquesta prohib sigui adequada per a tots els rel 'nn' -->
      <label-item label="RELNN"/>
      <label-item label="VLEXPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELNN"/>
      <label-item label="VSERPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELNN"/>
      <label-item label="VMODPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELNN"/>
      <label-item label="VHAVEPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELNN"/>
      <label-item label="VERBS_DISCURS"/>
    </label-sequence>


    <label-sequence><!--'Visitors who wanted to come', pq esculli el rel (no obstant, es farà malament: ask visitors who is the first) -->
      <label-item label="NOMSG"/>
      <label-item label="INTNOM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NOMPL"/>
      <label-item label="INTNOM"/>
    </label-sequence>

    <!--afegit MG 23/2/07 -->
    <label-sequence>
      <label-item label="NOMSG"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NOMPL"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="VLEXPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="VERBS_DISCURS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="VSERPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ANTROPONIM"/>
      <label-item label="VMODPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="TOPONIM"/>
      <label-item label="VLEXPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="TOPONIM"/>
      <label-item label="VERBS_DISCURS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="TOPONIM"/>
      <label-item label="VSERPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="TOPONIM"/>
      <label-item label="VMODPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NPALTRES"/>
      <label-item label="VLEXPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NPALTRES"/>
      <label-item label="VERBS_DISCURS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NPALTRES"/>
      <label-item label="VSERPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NPALTRES"/>
      <label-item label="VMODPP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DOVBLEX"/>
      <label-item label="PRNSUBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DOVBLEX"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VDO"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DOVBLEX"/>
      <label-item label="NOT"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ADJPOS"/>
      <label-item label="NOMSG"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ADJPOS"/>
      <label-item label="NOMPL"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNSUBJ"/>
      <label-item label="CANNOM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="PRNSUBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="DET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="DETQNT_ORD"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="PRNALTRES"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="NOT"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="DOVBLEX"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="ADV"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="ADJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="ADJPOS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="NUM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="NOMSG"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="NOMPL"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="ANTROPONIM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="TOPONIM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="NPALTRES"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="PREDET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="INF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="VHAVEINF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="VMODINF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="PRES"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="VHAVEPRES"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CANNOM"/>
      <label-item label="VMODPRES"/>
    </label-sequence>

    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="PRNSUBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="DET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="DETQNT_ORD"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="PRNALTRES"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="NOT"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="DOVBLEX"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="ADV"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="ADJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="ADJPOS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="NUM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="NOMSG"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="NOMPL"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="ANTROPONIM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="TOPONIM"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="NPALTRES"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="PREDET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="INF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="VHAVEINF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="VMODINF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="PRES"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="VHAVEPRES"/>
    </label-sequence>
    <label-sequence>
      <label-item label="WILLNOM"/>
      <label-item label="VMODPRES"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DET"/>
      <label-item label="VAUX"/>
    </label-sequence>
    <!--  <label-sequence><!-x-MG: soluciona "popular will." però no: yes, they will. Pensar-hi millor. -x->
	 <label-item label="VAUX"/>
	 <label-item label="SENT"/>
	 </label-sequence> -->


    <label-sequence>
      <label-item label="NOADV"/>
      <label-item label="PAST"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NOADV"/>
      <label-item label="INF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NOADV"/>
      <label-item label="PRES"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NOADV"/>
      <label-item label="GER"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NOADV"/>
      <label-item label="NOMSG"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NOADV"/>
      <label-item label="NOMPL"/>
    </label-sequence>

    <label-sequence>
      <label-item label="VERBS_DISCURS"/>
      <label-item label="NOMPL"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VERBS_DISCURS"/>
      <label-item label="NOMSG"/>
    </label-sequence>
    <label-sequence>
      <label-item label="CM"/>
      <label-item label="VERBS_DISCURS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VERBS_DISCURS"/>
      <label-item label="DET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VERBS_DISCURS"/>
      <label-item label="DETQNT_ORD"/>
    </label-sequence>


    <label-sequence>
      <label-item label="VLEX"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VSER"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VHAVE"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VDO"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VAUX"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VMOD"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREP"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREDET"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="INTERJ"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ADV"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREADV"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PREADV"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="INTNOM"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NUM"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELAN"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELNN"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="RELADV"/>
      <label-item label="GEN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="SENT"/>
      <label-item label="GEN"/>
    </label-sequence>

  </forbid>

  <enforce-rules>
    <enforce-after label="VHAVEPAST">
      <label-set>
	<label-item label="VLEXPP"/>
	<label-item label="VERBS_DISCURS"/>
	<label-item label="VSERPP"/>
	<label-item label="ADV"/>
	<label-item label="NOT"/>
	<label-item label="PRNSUBJ"/><!--per a interrogatives i altres inversions. Llavors caldria afegir més categories aquí o fer canvis en el transfer (had the man finished vs. they had the book) -->
      </label-set>
    </enforce-after>
    <enforce-after label="VHAVEINF">
      <label-set>
	<label-item label="VLEXPP"/>
	<label-item label="VERBS_DISCURS"/>
	<label-item label="VSERPP"/>
	<label-item label="ADV"/>
      </label-set>
    </enforce-after>
    <enforce-after label="VHAVEPRES">
      <label-set>
	<label-item label="VLEXPP"/>
	<label-item label="VERBS_DISCURS"/>
	<label-item label="VSERPP"/>
	<label-item label="ADV"/>
	<label-item label="NOT"/>
	<label-item label="PRNSUBJ"/><!--ídem més amunt -->
      </label-set>
    </enforce-after>
    <enforce-after label="VHAVE">
      <label-set>
	<label-item label="VLEXPP"/>
	<label-item label="VERBS_DISCURS"/>
	<label-item label="VSERPP"/>
	<label-item label="ADV"/>
	<label-item label="NOT"/>
      </label-set>
    </enforce-after>

    <enforce-after label="PREDET">
      <label-set>
	<label-item label="NOMSG"/>
	<label-item label="NOMPL"/>
	<label-item label="ADJ"/>
	<label-item label="DET"/>
      </label-set>
    </enforce-after>

    <!--   <enforce-after label="VAUX"><!-*-afegit MG 26/02/07 -*->
	 <label-set>
         <label-item label="PRNSUBJ"/>
	 <label-item label="ADV"/>
	 <label-item label="NOT"/>
         <label-item label="SENT"/>
	 <label-item label="CM"/>
	 <label-item label="INF"/>
	 <label-item label="VHAVEINF"/>
	 <label-item label="VMODINF"/>
	 </label-set>
	 </enforce-after>

<enforce-after label="VDO"><!-*-afegit MG 26/02/07 -*->
<label-set>
<label-item label="PRNSUBJ"/>
<label-item label="ADV"/>
<label-item label="NOT"/>
<label-item label="SENT"/>
<label-item label="CM"/>
<label-item label="INF"/>
<label-item label="VHAVEINF"/>
<label-item label="VMODINF"/>
</label-set>
</enforce-after> -->


    <!--
	<enforce-after label="VMODPP">
	<label-set>
        <label-item label="INF"/>
        <label-item label="VMODINF"/>
	<label-item label="SENT"/>
	<label-item label="CM"/>
	</label-set>
	</enforce-after>
	<enforce-after label="VMODINF"><!-*-propagar a a la resta de enforce de modals -*->
	<label-set>
        <label-item label="INF"/>
        <label-item label="VMODINF"/>
	<label-item label="ADV"/>
	<label-item label="NOT"/>
	<label-item label="PRNSUBJ"/>
	<label-item label="PRNALTRES"/>
	<label-item label="DET"/>
	<label-item label="PREDET"/>
	<label-item label="ADJ"/>
	<label-item label="ADJPOS"/>
	<label-item label="NOMSG"/>
	<label-item label="NOMPL"/>
	<label-item label="ANTROPONIM"/>
	<label-item label="TOPONIM"/>
	<label-item label="NPALTRES"/>
	<label-item label="NUM"/>
	<label-item label="SENT"/>
	<label-item label="CM"/>
	</label-set>
	</enforce-after>

<enforce-after label="VMODPRES">
<label-set>
<label-item label="INF"/>
<label-item label="VMODINF"/>
<label-item label="ADV"/>
<label-item label="NOT"/>
<label-item label="SENT"/>
<label-item label="CM"/>
</label-set>
</enforce-after>
<enforce-after label="VMODPRI">
<label-set>
<label-item label="INF"/>
<label-item label="VMODINF"/>
<label-item label="ADV"/>
<label-item label="NOT"/>
<label-item label="SENT"/>
<label-item label="CM"/>
</label-set>
</enforce-after>
<enforce-after label="VMOD">
<label-set>
<label-item label="INF"/>
<label-item label="VMODINF"/>
<label-item label="ADV"/>
<label-item label="NOT"/>
<label-item label="SENT"/>
<label-item label="CM"/>
</label-set>
</enforce-after> -->

  </enforce-rules>

</tagger>
