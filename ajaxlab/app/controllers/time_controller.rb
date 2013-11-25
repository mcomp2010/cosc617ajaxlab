class TimeController < ApplicationController

  def index


    respond_to do |format|
      format.html {
        @time_out = 'The current time is ' + Time.now.strftime("%m/%d/%Y %H:%M:%S")
      }
      msg = {
          :status => "ok", :message => 'The current time is ' + Time.now.strftime("%m/%d/%Y %H:%M:%S") }
      format.json { render json: msg, :status => :ok }
    end
  end
end
