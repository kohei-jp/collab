module Api
  module V1
    class UsersController < Api::V1::ApiController
      def index
        binding.pry
        if session[:customer_id]
          user = User.find(session[:customer_id]) 
        else
          # user = User.last
        end
        render json: {
          user: user
        }, status: :ok
      end
    end
  end
end
