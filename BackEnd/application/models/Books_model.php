<?php
		class Books_model extends CI_Model {
			public function __construct()
			{
				$this->load->database();
			}

			public function get_books()
			{
				$query=$this->db->get('mybooks');
				return $query->result_array();
			}
}

 ?>
