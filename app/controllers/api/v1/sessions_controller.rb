module Api
  module V1
    class SessionsController < Api::V1::ApiController

      def create
        # binding.pry
        @user = User.new(user_params)
        if @user.save
          render json: {
            status: 200,
            user: @user,
            message: "会員登録出来ました"
          }
        else
          render json:{
            status: 400,
            message: "会員登録に失敗しました"
          }
        end
      end

      def destroy
      end

      private
      def user_params
        params.require(:users).permit(:user_name, :email, :hashed_password)
      end
    end
  end
end
