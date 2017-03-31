

class Api::QuestionsController < ApplicationController

	def create
		@question = Question.new(question_params)
		if @question.save
			render :show
		else
			render json: @question.errors.full_messages, status: 422
		end
	end

	def update
		@question = Question.find(params[:id])
		if @question.update_attributes(question_params)
			render :show
		else
			render json: @question.errors.full_messages, status: 422
		end
	end

	def index
		if params['query'] == "false"
			@questions = Question.all.includes(:author, :answers, :votes).order('created_at desc')
		else
			@questions = Question.search(params['query']).includes(:author, :answers, :votes).order('created_at desc')
		end
		render :index
	end

	def show
		@question = Question.find(params[:id])
		unless @question.nil?
			render :show
		else
			render json: @question.errors.full_messages, status: 422
		end
	end

	def destroy
		@question = Question.find(params[:id])
		if @question.destroy
			render :show
		else
			render json: @question.errors.full_messages, status: 422
		end
	end

	private

	def question_params
		params.require(:question).permit(:id, :title, :body, :author_id, :created_at, :updated_at)
	end
end
