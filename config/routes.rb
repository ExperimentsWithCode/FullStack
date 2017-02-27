Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :questions, only: [:index, :create, :update, :destroy, :show]
    resources :answers, only: [:create, :update, :destroy, :show]
    resources :votes, only: [:create, :update, :destroy, :show]
  end

  root "static_pages#root"
end
