Rails.application.routes.draw do
  # namespace: path,controllerをgrouping. ﾃﾞｨﾚｸﾄﾘ階層を分けられる
  namespace :api do
    # 開発途中でAPIの仕様を大幅に変更する可能性に備えてv1。
    namespace :v1 do
      resources :users, only: %i[index]
    end
  end
end

# note
=begin
1. 出力されたroutes一覧から、'user'が含まれる一行のみを出力する。|(パイプ)でコマンドを繋げられる。
$ rails routes | grep user
2.
=end
