import { useEffect, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { FaGithub, FaStar } from "react-icons/fa";

const REPO = "bloodworks-io/phlox";
const CACHE_KEY = "phlox_gh_stars";
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

function formatCount(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

// Native GitHub "Star" button — replaces the third-party ghbtns iframe so it
// aligns with the other navbar buttons and matches the design system.
const GitHubStarButton = () => {
  const [stars, setStars] = useState(() => {
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
      if (cached && Date.now() - cached.t < CACHE_TTL) return cached.n;
    } catch {
      /* ignore */
    }
    return null;
  });

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/repos/${REPO}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (cancelled || !d || typeof d.stargazers_count !== "number") return;
        const n = d.stargazers_count;
        setStars(n);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ n, t: Date.now() }));
        } catch {
          /* ignore */
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Button
      as="a"
      href={`https://github.com/${REPO}`}
      target="_blank"
      rel="noopener noreferrer"
      size="sm"
      variant="ghostDark"
      borderRadius="full"
      px={3}
      display={{ base: "none", sm: "inline-flex" }}
      leftIcon={<FaGithub />}
      _hover={{ textDecoration: "none" }}
    >
      {stars !== null && (
        <Box
          as="span"
          ml={0}
          display="inline-flex"
          alignItems="center"
          gap={1}
          fontSize="sm"
          opacity={0.85}
        >
          <Box as={FaStar} />
          {formatCount(stars)}
        </Box>
      )}
    </Button>
  );
};

export default GitHubStarButton;
