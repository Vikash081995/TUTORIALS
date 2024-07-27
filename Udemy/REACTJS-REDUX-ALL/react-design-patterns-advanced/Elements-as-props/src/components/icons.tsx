export const Loading = ({ size }: { size?: string }) => {
  return <span style={{ fontSize: size }}>⏳</span>;
};

export const Error = () => {
  return <span>❌</span>;
};

export const Warning = () => {
  return <span>⚠️</span>;
};

export const Avatar = () => {
  return <span>😎</span>;
};
