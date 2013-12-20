for i in `ls | grep "\.tagged" | cut -f1 -d'.' | sort -u `; do 
	COUNT=` ls $i.handtagged.* 2>/dev/null | wc -l`; 
	AUTHORS=`ls $i.handtagged.* 2>/dev/null| sed 's/\.txt//g' | sed "s/$i.handtagged.//g" | tr '\n' ','`;
	echo -e "$COUNT\t$i\t$AUTHORS"; 
done | sort -gr | sed 's/,$//g'
