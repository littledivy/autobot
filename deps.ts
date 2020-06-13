import Autopilot from "https://deno.land/x/autopilot/mod.ts";

export {
  Client,
  MESSAGE_CREATE,
  READY,
  RATELIMIT,
  HEARTBEAT,
  RESUMED,
  INVALID_SESSION,
  ev,
} from "https://deno.land/x/cordeno@v0.3.3/mod.ts";

export default new Autopilot();
