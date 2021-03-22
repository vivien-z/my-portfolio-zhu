Rails.application.routes.draw do
  resources :author, only: [:index] do
    resources :project, only: [:show]
  end
end
