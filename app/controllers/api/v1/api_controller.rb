module Api
  module V1
    class ApiController < ApplicationController
      protect_from_forgery # CSRF対策

    # ログイン判定（ログイン済：true 未ログイン：false）
    def logined?
      return false if session[:customer_id].blank?
      return User.find(session[:customer_id]).present?
    end

    # ログイン判定（未ログイン：true ログイン済：false）
    def logout?
      return session[:customer_id].blank?
    end
    end
  end
end
