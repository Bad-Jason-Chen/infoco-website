import quizHtml from './quick-quiz.html?raw';
import { createQuizGateResponse } from '../../lib/quiz-gate.mjs';

export const dynamic = 'force-dynamic';

export function GET() {
  const response = createQuizGateResponse(new Date(), quizHtml);
  return new Response(response.body, { headers: response.headers });
}

export function HEAD() {
  const response = createQuizGateResponse(new Date(), quizHtml);
  return new Response(null, { headers: response.headers });
}
