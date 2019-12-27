


sDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
lDir=$(pwd)


php -v > /dev/null 2>&1
phpStat=$?

if [ $phpStat -ne 0 ];then
	echo ""
	echo "	Error:"
	echo "		php -v returned a non zero status"
	echo ""
	exit 1
fi


errorMessage() {
	echo ""
	echo "	Usage is: $0 <InputFile> [outputFile]"
	echo ""
	exit 1

}


getJson() {
	file=$1	
	php $sDir/getJson.php $file

}

if [ "$#" -eq 0 ]; then
	echo "	Error:"
	echo "		No argument provided"
	echo ""
	errorMessage
else
	file=$1
	

	if test -f "$file"; then
		json=$(getJson $file)

	else
		echo ""
		echo "Input file not found"
		echo ""
		errorMessage


	fi

	if [ "$#" -eq 2 ];then
		outFile=$2
		touch $outFile  > /dev/null 2>&1	
		outFileStat=$?

		if [ $outFileStat -ne 0 ];then
			echo ""
			echo "	Error:"
			echo "		Could not write to outfile"
			echo ""
			exit 1
		else
			echo "$json" > $outFile

		fi

	else
		echo "$json"



	fi

fi
