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

			public function delete_book($id)
			{
				$this->db->where('id',$id);
				$this->db->delete('mybooks');
				return true;
			}

			public function add_book()
			{
				$data = array(
					'title'=>$this->input->post('title'),
					'description'=>$this->input->post('description'),
					'image'=>$this->input->post('image'),
					'rating'=>$this->input->post('rating'),
					'category'=>$this->input->post('category')
				);
				return $this->db->insert('mybooks',$data);
			}
}

 ?>
