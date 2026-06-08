type Props = {
  videoId: string;
  title: string;
};

export default function VideoEmbed({ videoId, title }: Props) {
  return (
    <div style={{
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: 'var(--clay)',
      border: '1px solid var(--border-soft)',
      marginTop: 14,
    }}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  );
}
