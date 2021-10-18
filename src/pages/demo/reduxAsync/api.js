export default async function getUserRepos() {
  const list = await fetch('https://api.github.com/users/kayikay/repos').then((response) => response.json())
  return list
}
