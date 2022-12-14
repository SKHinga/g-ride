Rails.application.routes.draw do
  
  resources :users, only: [:show, :create]

  resources :lends, only: [:index, :show, :create]


  post '/login', to: 'sessions#create'
  get '/auth', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
  

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
