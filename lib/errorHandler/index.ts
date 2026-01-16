import { NextRequest, NextResponse } from "next/server";

// Generic handler type
export type Handler<TContext> = (
  req: NextRequest,
  context: TContext
) => Promise<NextResponse>;

export function withErrorHandler<TContext>(handler: Handler<TContext>) {
  return async (request: NextRequest, context: TContext) => {
    try {
      return await handler(request, context);
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { success: false, error: "Internal Server Error" },
        { status: 500 }
      );
    }
  };
}
