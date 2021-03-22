Rails.application.routes.draw do
  root to: 'authors#home'
  resources :author, only: [:index] do
    resources :project, only: [:show]
  end
end
