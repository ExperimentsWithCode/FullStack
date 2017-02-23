class Api::AnswersController < ApplicationController

	def create
		@answer = Answer.new(answer_params)
		if @answer.save
			render :show
		else
			render json: @answer.errors.full_messages, status: 422
		end
	end

	def update
		@answer = Answer.find(params[:id])
		if @answer.update_attributes(answer_params)
			render api_question_url+"/#{@answer.id}"
		else
			render json: @answer.errors.full_messages, status: 422
		end
	end

	def index
		@answers = Answer.all
		render :index
	end

	def show
		@answer = Answer.find(params[:id])
		unless @answer.nil?
			render :show
		else
			render json: @answer.errors.full_messages, status: 422
		end
	end

	def destroy
		@answer = Answer.find(params[:id])
		if @answer.destroy
			render :show
		else
			render json: @answer.errors.full_messages, status: 422
		end
	end

	private

	def answer_params
		params.require(:answer).permit(:id, :question_id, :body, :author_id, :created_at, :updated_at)
	end
end
