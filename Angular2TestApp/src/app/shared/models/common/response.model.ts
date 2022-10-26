export interface ErrorResponseMessage{
    httpStatusCode: number;
    errors: Error[];
}

export interface Error{
    message: string;
    type:string;
    code: string;
    source: string;
    index: number;
    stackTrace: string;
}

export interface SuccessMessageResponse{
    message: string;
}
