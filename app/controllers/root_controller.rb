class RootController < ApplicationController
  def index
    @greetings = Message.all
  end
end
