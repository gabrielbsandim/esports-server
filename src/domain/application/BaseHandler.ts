export interface IBaseHandler<TResponse, TRequest> {
  handle: (input: TRequest) => Promise<TResponse>
}
