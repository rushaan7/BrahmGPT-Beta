import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are BrahmGPT, an AI assistant focused on providing clear, concise, and well-formatted responses. 
Format your responses using markdown for better readability:
- Use **bold** for emphasis
- Use *italic* for subtle emphasis
- Use \`code\` for technical terms
- Use bullet points for lists
- Use numbered lists for steps
- Use > for important notes
- Use \`\`\` for code blocks
- Use --- for section breaks
Keep responses concise but informative.`

export async function POST(req) {
  try {
    const { message } = await req.json()
    
    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'BrahmGPT'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-r1-distill-qwen-32b:free',
        messages: [
          {
            role: 'system',
            content: `You are BrahmGPT, an AI assistant focused on providing clear, concise, and well-formatted responses.
Format your responses using markdown for better readability:
- Use **bold** for emphasis
- Use *italic* for subtle emphasis
- Use \`code\` for technical terms
- Use bullet points for lists
- Use numbered lists for steps
- Use > for important notes
- Use \`\`\` for code blocks
- Use --- for section breaks
Keep responses concise but informative.`
          },
          { role: 'user', content: message }
        ]
      })
    })

    const data = await response.json()
    console.log('API Response:', data)

    if (!data.choices?.[0]?.message?.content) {
      throw new Error('Invalid response format from AI model')
    }

    return new Response(JSON.stringify({ 
      response: data.choices[0].message.content 
    }), {
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Chat API Error:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to get response from AI model'
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
} 