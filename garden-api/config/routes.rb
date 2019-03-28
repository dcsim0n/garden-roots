Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :plants, only: [:index,:show,:create, :destroy]
  resources :garden_beds, only: [:index, :show, :create, :destroy]
  resources :bed_plants, only: [:create, :destroy]

  get "/suggest/:id", to: "suggest#show"
end
