<?php

class ParkingModel extends RelationModel {
	protected $_link = array(
        'charge'=>array(
    		'mapping_type' => HAS_MANY,
            'class_name' => 'Charge',
    		'foreign_key'=> 'pid'
        )
    );
}