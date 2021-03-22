Rails.application.routes.draw do
  root to: 'pages#home'
  resources :author, only: [:index] do
    resources :project, only: [:show]
  end
end
