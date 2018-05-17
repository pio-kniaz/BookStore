<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Books extends CI_Controller {

	public function books_api()
	{
		$this->load->model('Books_model');
		$data=$this->Books_model->get_books();
		$books['books']=$data;
		// print_r($data);
		// echo "<hr>";
		// $this->load->view("main",$books);
		echo json_encode($books);
	}
}
?><?php
