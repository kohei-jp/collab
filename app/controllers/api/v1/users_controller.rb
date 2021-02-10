module Api
  module V1
    class UsersController < Api::V1::ApiController
      def index
        user = User.first
        render json: {
          user: user
        }, status: :ok
      end
    end
  end
end
