import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/db';

// Owner credentials
const OWNER_ADDRESS = '0xea1e562c8e689d938d67a8ef9bd44d4ddb82e76b';
const OWNER_GITHUB = 'yy9331';

export async function GET(_request: NextRequest) {
  try {
    // Everyone can see all messages now
    const messages = await db.getMessages();
    return NextResponse.json({ data: messages, error: null });
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return NextResponse.json(
      { data: null, error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { author_name, message, author_address, author_github } = body;
    
    if (!author_name || !message) {
      return NextResponse.json(
        { data: null, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    if (!author_address && !author_github) {
      return NextResponse.json(
        { data: null, error: 'Either wallet address or GitHub username is required' },
        { status: 400 }
      );
    }
    
    const newMessage = await db.insertMessage({
      author_name,
      message,
      author_address,
      author_github
    });
    
    return NextResponse.json({ data: newMessage, error: null });
  } catch (error) {
    console.error('Failed to insert message:', error);
    return NextResponse.json(
      { data: null, error: 'Failed to submit message' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const messageId = searchParams.get('id');
    const requesterAddress = searchParams.get('address');
    const requesterGithub = searchParams.get('github');
    
    // Verify message ID is provided
    if (!messageId) {
      return NextResponse.json(
        { data: null, error: 'Message ID is required' },
        { status: 400 }
      );
    }
    
    // Verify requester identity is provided
    if (!requesterAddress && !requesterGithub) {
      return NextResponse.json(
        { data: null, error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    // Check if requester is the owner (wallet OR github)
    const isOwnerByWallet = requesterAddress && requesterAddress.toLowerCase() === OWNER_ADDRESS.toLowerCase();
    const isOwnerByGithub = requesterGithub && requesterGithub.toLowerCase() === OWNER_GITHUB.toLowerCase();
    if (!isOwnerByWallet && !isOwnerByGithub) {
      return NextResponse.json(
        { data: null, error: 'Unauthorized: Only owner can delete messages' },
        { status: 403 }
      );
    }
    
    // Delete the message
    const deleted = await db.deleteMessage(messageId);
    
    if (!deleted) {
      return NextResponse.json(
        { data: null, error: 'Message not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ data: { success: true }, error: null });
  } catch (error) {
    console.error('Failed to delete message:', error);
    return NextResponse.json(
      { data: null, error: 'Failed to delete message' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, content, address, github } = body as { id?: string; content?: string; address?: string; github?: string };

    if (!id || typeof content !== 'string') {
      return NextResponse.json(
        { data: null, error: 'Message id and new content are required' },
        { status: 400 }
      );
    }

    if (!address && !github) {
      return NextResponse.json(
        { data: null, error: 'Authentication required' },
        { status: 401 }
      );
    }

    const isOwnerByWallet = address && address.toLowerCase() === OWNER_ADDRESS.toLowerCase();
    const isOwnerByGithub = github && github.toLowerCase() === OWNER_GITHUB.toLowerCase();
    if (!isOwnerByWallet && !isOwnerByGithub) {
      return NextResponse.json(
        { data: null, error: 'Unauthorized: Only owner can update messages' },
        { status: 403 }
      );
    }

    const updated = await db.updateMessage(id, content);
    if (!updated) {
      return NextResponse.json(
        { data: null, error: 'Message not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: updated, error: null });
  } catch (error) {
    console.error('Failed to update message:', error);
    return NextResponse.json(
      { data: null, error: 'Failed to update message' },
      { status: 500 }
    );
  }
}
