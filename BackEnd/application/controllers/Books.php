<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Books extends CI_Controller {


	public function books_api()
	{
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
		$this->load->model('Books_model');
		$data=$this->Books_model->get_books();
		$books['books']=$data;
		// print_r($data);
		// echo "<hr>";
		// $this->load->view("main",$books);
		echo json_encode($books);
	}

	public function delete($id)
	{
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
		$this->load->model('Books_model');
		$this->Books_model->delete_book($id);
	}

	public function test()
	{
		$this->load->view('main');
	}

	public function create()
	{
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
		$this->load->model('Books_model');
		$this->Books_model->add_book();
	}


}
?><?php
