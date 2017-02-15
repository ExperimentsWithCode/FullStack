class Api::UsersController < ApplicationController

	def create
		# debugger
		@user = User.new(user_params)
		@user.reset_session_token!
		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	private

	def user_params
		params.require(:user).permit(:username, :password, :email, :session_token)
	end
end
