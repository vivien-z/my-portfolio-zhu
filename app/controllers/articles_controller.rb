class ArticlesController < ApplicationController
  def index
    @ariticles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    @author = Author.find(params[:author_id])
    @article.author = @author
  end

  private

  def article_params
    params.require(:article).permit(:title, :content)
  end
end
