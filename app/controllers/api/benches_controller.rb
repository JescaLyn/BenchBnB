class Api::BenchesController < ApplicationController
  def index
    bounds ||= nil
    @benches = params[:bounds] ? Bench.in_bounds(params[:bounds]) : Bench.all
  end

  def create
    puts ("Params" + params.to_s)
    @bench = Bench.new(bench_params)
    @bench.save
    render json: @bench
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
