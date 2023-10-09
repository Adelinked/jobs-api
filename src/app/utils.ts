export const getJobsData = async (location = "", type = "", search = "") => {
  let params = "";
  if (location) {
    params = `?location=${location}`;
  }
  if (type) {
    params += params ? `&type=${type}` : `?type=${type}`;
  }
  if (search) {
    params += params ? `&search=${search}` : `?search=${search}`;
  }

  const res = await fetch(`/api/jobs${params}`);
  const data = await res.json();

  return data;
};

export const splitTextByEmailAddress = (text: string) => {
  const emailRegex = /[\w.+-]+@[\w-]+\.[a-z]{2,4}/g;
  const parts = [];
  let lastIndex = 0;

  while (true) {
    const match = emailRegex.exec(text);

    if (!match) {
      parts.push(text.slice(lastIndex));
      break;
    }

    const emailStart = match.index;
    const emailEnd = match.index + match[0].length;

    if (emailStart > lastIndex) {
      parts.push(text.slice(lastIndex, emailStart));
    }

    parts.push(match[0]);
    lastIndex = emailEnd;
  }

  return parts;
};
