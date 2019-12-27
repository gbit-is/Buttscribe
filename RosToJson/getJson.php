<?php
# TODO also, techpriest enginseer text overlaps the edge of the dataslate - it's where it explains the master of machines rule or QUESTOR MECHANICUS models (line length on abilities)
# TODO Grey Knight Paladins are a squad of 3, Paragon and 2 Paladins, but the buttscribe output only has wound boxes for a paragon and one paladin (general headcount issue, semi-known - see also IG squads and Terminarors)
# TODO one sheet per page instead of 2
# TODO (big one) improve print quality
# TODO 30k support, possibly

error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

ob_start();

//require_once('../lib/wh40kRenderer.php');
//require_once('../lib/wh40kHTMLParser.php');
require_once('wh40kROSParser.php');



$selectedFile = $argv[1];


$parser = new wh40kROSParser($selectedFile);

$UNITS = $parser->units;


//echo '<pre>'; print_r($UNITS); echo '</pre>';

$JJ = json_encode($UNITS,JSON_PRETTY_PRINT);

echo $JJ;


//foreach($results['data'] as $result) {
//    echo $result['type'], '<br>';
//}

#echo $UNITS;

#echo gettype($UNITS);

//$OUTFILE = '/var/tmp/'.uniqid().'.pdf';
//$output    = new wh40kRenderer($OUTFILE, $UNITS);
//$downloads = $output->renderToOutFile();


?>

