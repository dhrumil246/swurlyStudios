import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error('Discord Webhook URL is not configured.');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Format the Discord embed
    const payload = {
      embeds: [
        {
          title: '🚨 New Studio Lead!',
          color: 13938487, // A gold/yellow color
          fields: [
            {
              name: 'Name',
              value: data.name,
              inline: true,
            },
            {
              name: 'Email',
              value: data.email,
              inline: true,
            },
            {
              name: 'Message',
              value: data.message,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    // Send to Discord
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Discord API responded with status ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to process contact form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
