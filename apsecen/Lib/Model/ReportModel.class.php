<?php

class ReportModel extends RelationModel {
	protected $_link = array(
        'security'=>array(
    		'mapping_type' => BELONGS_TO,
            'class_name' => 'Security',
    		'foreign_key' => 'sid',
    		'mapping_fields' => 'id,jobnumber,name,phone'
        ),
        'parking'=>array(
    		'mapping_type' => BELONGS_TO,
            'class_name' => 'Parking',
    		'foreign_key' => 'pid'
        ),
        'user'=>array(
            'mapping_type' => BELONGS_TO,
            'class_name' => 'User',
            'foreign_key' => 'uid',
            'mapping_fields' => 'id,name,phone'
        )
    );
}