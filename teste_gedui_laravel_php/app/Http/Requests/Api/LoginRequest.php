<?php
namespace App\Http\Requests\Api;

class LoginRequest extends Request
{
	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		$rules = [
			'login'    => ['required', 'string', 'min:4'],
			'password' => ['required', 'string', 'min:6'],
			'remember_me' => ['boolean'],
		];

		return $rules;
	}

	/**
	 * @return array
	 */
	public function messages()
	{
		$messages = [];

		return $messages;
	}
}
