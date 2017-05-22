<?php

class OrderModel extends RelationModel {
	protected $_link = array(
        'parking'=>array(
    		'mapping_type' => BELONGS_TO,
            'class_name' => 'Parking',
    		'foreign_key'=> 'pid'
        ),
        'user'=>array(
            'mapping_type' => BELONGS_TO,
            'class_name' => 'User',
            'foreign_key' => 'uid',
            'mapping_fields' => 'id,name,phone'
        )
    );
}