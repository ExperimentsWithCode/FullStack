class Api::VotesController < ApplicationController

	def create
		@vote = Vote.new(vote_params)
		if @vote.save
			render :show
		else
			render json: @vote.errors.full_messages, status: 422
		end
	end

	def update
		@vote = Vote.find(params[:id])
		if @vote.update_attributes(vote_params)
			render api_question_url+"/#{@vote.id}"
		else
			render json: @vote.errors.full_messages, status: 422
		end
	end

	def index
		@votes = Vote.all
		render :index
	end

	def show
		@vote = Vote.find(params[:id])
		unless @vote.nil?
			render :show
		else
			render json: @vote.errors.full_messages, status: 422
		end
	end

	def destroy
		@vote = Vote.find(params[:id])
		if @vote.destroy
			render :show
		else
			render json: @vote.errors.full_messages, status: 422
		end
	end

	private

	def vote_params
		params.require(:vote).permit(:id, :answer_id, :user_id)
	end
end
