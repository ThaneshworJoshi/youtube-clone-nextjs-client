import { Card, Text } from '@mantine/core';
import Link from 'next/link';
import { Video } from '../types';

function VideoTeaser({ video }: { video: Video }) {
  return (
    <Link href={`/watch/${video.videoId}`} passHref>
      <Card shadow='sm' p='xl' component='a'>
        <Text weight={500} size='lg'>
          {video.title}
        </Text>

        <Text>{video.description}</Text>
      </Card>
    </Link>
  );
}

export default VideoTeaser;
