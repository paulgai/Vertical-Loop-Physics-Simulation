const root = document.documentElement;
const appShell = document.querySelector(".app-shell");
const themeButtons = document.querySelectorAll("[data-theme]");
const loopTypeSelect = document.querySelector("#loop-type");
const simulationViewport = document.querySelector("#simulation-viewport");
const simulationWorld = document.querySelector("#simulation-world");
const stringSystem = document.querySelector("#string-system");
const circularGuideLayer = document.querySelector("#circular-guide-layer");
const guideSurfaceGradient = document.querySelector("#guide-surface-gradient");
const guideBackBed = document.querySelector("#guide-back-bed");
const guideBackSurface = document.querySelector("#guide-back-surface");
const guideFrontBed = document.querySelector("#guide-front-bed");
const guideFrontSurface = document.querySelector("#guide-front-surface");
const simulationString = document.querySelector("#simulation-string");
const slackStringLayer = document.querySelector("#slack-string-layer");
const slackStringOutline = document.querySelector("#slack-string-outline");
const slackString = document.querySelector("#slack-string");
const stringBody = document.querySelector("#string-body");
const fixedPoint = document.querySelector("#fixed-point");
const fixedPointLabel = document.querySelector("#fixed-point-label");
const stringGeometryLayer = document.querySelector("#string-geometry-layer");
const motionTrailLayer = document.querySelector("#motion-trail-layer");
const motionTrailGlow = document.querySelector("#motion-trail-glow");
const motionTrailPath = document.querySelector("#motion-trail-path");
const circularReference = document.querySelector("#circular-reference");
const verticalReference = document.querySelector("#vertical-reference");
const initialRadiusReference = document.querySelector("#initial-radius-reference");
const currentRadiusReference = document.querySelector("#current-radius-reference");
const zeroHeightReference = document.querySelector("#zero-height-reference");
const bodyHeightReference = document.querySelector("#body-height-reference");
const heightDimension = document.querySelector("#height-dimension");
const heightDimensionCapZero = document.querySelector("#height-dimension-cap-zero");
const heightDimensionCapBody = document.querySelector("#height-dimension-cap-body");
const initialAngleArc = document.querySelector("#initial-angle-arc");
const initialAngleHead = document.querySelector("#initial-angle-head");
const currentAngleArc = document.querySelector("#current-angle-arc");
const currentAngleHead = document.querySelector("#current-angle-head");
const geometryPointsLayer = document.querySelector("#geometry-points-layer");
const pointA = document.querySelector("#point-a");
const pointB = document.querySelector("#point-b");
const pointGamma = document.querySelector("#point-gamma");
const velocityVectorLayer = document.querySelector("#velocity-vector-layer");
const velocityVector = document.querySelector("#vector-u0");
const velocityVectorHead = document.querySelector("#vector-u0-head");
const velocityVectorLabel = document.querySelector("#vector-u0-label");
const weightVector = document.querySelector("#vector-weight");
const weightVectorHead = document.querySelector("#vector-weight-head");
const weightXComponent = document.querySelector("#component-weight-x");
const weightXComponentHead = document.querySelector("#component-weight-x-head");
const weightYComponent = document.querySelector("#component-weight-y");
const weightYComponentHead = document.querySelector("#component-weight-y-head");
const weightProjectionFromX = document.querySelector("#projection-weight-from-x");
const weightProjectionFromY = document.querySelector("#projection-weight-from-y");
const tensionVector = document.querySelector("#vector-tension");
const tensionVectorHead = document.querySelector("#vector-tension-head");
const massLabel = document.querySelector("#mass-label");
const zeroHeightLabel = document.querySelector("#zero-height-label");
const heightLabel = document.querySelector("#height-label");
const initialAngleLabel = document.querySelector("#initial-angle-label");
const currentAngleLabel = document.querySelector("#current-angle-label");
const pointALabel = document.querySelector("#point-a-label");
const pointBLabel = document.querySelector("#point-b-label");
const pointGammaLabel = document.querySelector("#point-gamma-label");
const weightLabel = document.querySelector("#weight-label");
const weightXLabel = document.querySelector("#weight-x-label");
const weightYLabel = document.querySelector("#weight-y-label");
const tensionLabel = document.querySelector("#tension-label");
const displaySettings = document.querySelector("#display-settings");
const geometricFeaturesCheckbox = document.querySelector("#geometric-features");
const vectorFeaturesCheckbox = document.querySelector("#vector-features");
const motionTrailCheckbox = document.querySelector("#motion-trail");
const angleParameterControl = document.querySelector("#angle-parameter-control");
const resetViewButton = document.querySelector("#reset-view");
const physicsInfoButton = document.querySelector("#show-physics-info");
const physicsInfoDialog = document.querySelector("#physics-info-dialog");
const closePhysicsInfoButton = document.querySelector("#close-physics-info");
const fullscreenButton = document.querySelector("#toggle-fullscreen");
const zoomInButton = document.querySelector("#zoom-in");
const zoomOutButton = document.querySelector("#zoom-out");
const restartButton = document.querySelector("#restart-simulation");
const playButton = document.querySelector("#play-simulation");
const pauseButton = document.querySelector("#pause-simulation");
const stepBackwardButton = document.querySelector("#step-backward");
const stepForwardButton = document.querySelector("#step-forward");
const settingsPanelToggle = document.querySelector("#settings-panel-toggle");
const resultsPanelToggle = document.querySelector("#results-panel-toggle");
const resultTime = document.querySelector("#result-time");
const resultAngle = document.querySelector("#result-angle");
const resultHeight = document.querySelector("#result-h");
const resultMaximumHeight = document.querySelector("#result-h-max");
const resultSpeed = document.querySelector("#result-speed");
const resultTensionSymbol = document.querySelector("#result-symbol-tension");
const resultTension = document.querySelector("#result-tension");
const resultWeight = document.querySelector("#result-weight");
const resultWeightY = document.querySelector("#result-weight-y");
const resultWeightX = document.querySelector("#result-weight-x");
const resultKineticEnergy = document.querySelector("#result-kinetic-energy");
const resultPotentialEnergy = document.querySelector("#result-potential-energy");
const resultMechanicalEnergy = document.querySelector("#result-mechanical-energy");
const parameterRanges = document.querySelectorAll(".form-range[data-pair]");

const stackedMobileLayoutQuery = window.matchMedia(
  "(max-width: 820px) and (orientation: portrait)",
);
const APP_ZOOM_LEVELS = [0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2];
const MIN_VIEW_ZOOM = 0.35;
const MAX_VIEW_ZOOM = 8.5;
const WORLD_WIDTH = 1200;
const WORLD_HEIGHT = 600;
const ORIGIN_X = 600;
const ORIGIN_Y = 300;
const PIXELS_PER_METER = 27.5;
const BODY_RADIUS_PX = 13;
const VECTOR_LENGTH_PER_SPEED_PX = 14;
const VECTOR_HEAD_LENGTH_PX = 9;
const VECTOR_HEAD_HALF_HEIGHT_PX = 3.5;
const WEIGHT_LENGTH_PER_KG_PX = 28;
const DEFAULT_GRAVITY = 9.81;
const FORCE_LENGTH_PER_NEWTON_PX = WEIGHT_LENGTH_PER_KG_PX / DEFAULT_GRAVITY;
const INITIAL_ANGLE_ARC_RADIUS_PX = 42;
const CURRENT_ANGLE_ARC_RADIUS_PX = 61;
const LABEL_DRAG_RADIUS_PX = 55;
const FRAME_STEP = 0.01;
const EVENT_EPSILON = 1e-9;

let applicationZoom = 1;
const view = { x: 0, y: 0, scale: 1 };
const pointer = { active: false, id: null, x: 0, y: 0 };
const playback = {
  model: null,
  time: 0,
  playing: false,
  animationId: null,
  lastTimestamp: null,
};
const labelDrag = {
  active: false,
  element: null,
  pointerId: null,
  startClientX: 0,
  startClientY: 0,
  startOffsetX: 0,
  startOffsetY: 0,
};

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function numericInputValue(input) {
  const rawValue = String(input.value).trim().replace(",", ".");
  return rawValue === "" ? Number.NaN : Number(rawValue);
}

function clearSliderOverflowState(range) {
  range.classList.remove("is-below-range", "is-above-range");
  range.removeAttribute("aria-valuetext");
}

function syncSliderToNumberValue(range, value) {
  const minimum = Number(range.min);
  const maximum = Number(range.max);
  const isBelowRange = value < minimum;
  const isAboveRange = value > maximum;

  range.value = String(clamp(value, minimum, maximum));
  range.classList.toggle("is-below-range", isBelowRange);
  range.classList.toggle("is-above-range", isAboveRange);

  if (isBelowRange || isAboveRange) {
    const edge = isBelowRange ? "κάτω" : "πάνω";
    range.setAttribute(
      "aria-valuetext",
      `${value} — ${edge} από το οπτικό όριο του slider`,
    );
  } else {
    range.removeAttribute("aria-valuetext");
  }
}

function isAllowedParameterValue(range, value) {
  if (!Number.isFinite(value)) return false;
  if (range.dataset.domain === "nonnegative-unbounded") return value >= 0;
  if (range.dataset.domain === "minimum-bounded") {
    return value >= Number(range.min);
  }
  return value >= Number(range.min) && value <= Number(range.max);
}

function parameterValidationMessage(range, value) {
  if (!Number.isFinite(value)) return "Εισαγάγετε μια έγκυρη αριθμητική τιμή.";
  if (range.dataset.domain === "nonnegative-unbounded") {
    return "Η ταχύτητα δεν μπορεί να είναι αρνητική.";
  }
  if (range.dataset.domain === "minimum-bounded") {
    return `Η τιμή πρέπει να είναι τουλάχιστον ${range.min}.`;
  }
  return `Η τιμή πρέπει να είναι από ${range.min} έως ${range.max}.`;
}

function renderLatex(element, expression, fallback = expression) {
  if (!element) return;
  if (element.dataset.latexExpression === expression) return;
  element.dataset.latexExpression = expression;
  if (window.katex) {
    window.katex.render(expression, element, {
      throwOnError: false,
      strict: false,
    });
  } else {
    element.textContent = fallback;
  }
}

function renderStaticLatex() {
  const staticExpressions = new Map([
    ['label[for="radius-range"]', "R"],
    ['label[for="mass-range"]', "m"],
    ['label[for="gravity-range"]', "g"],
    ['label[for="angle-range"]', "\\varphi_0"],
    ['label[for="speed-range"]', "u_0"],
    ["#fixed-point-label", "O"],
    ["#vector-u0-label", "\\vec{u}_0"],
    ["#mass-label", "m"],
    ["#zero-height-label", "h_0"],
    ["#initial-angle-label", "\\varphi_0"],
    ["#current-angle-label", "\\varphi"],
    ["#point-a-label", "A"],
    ["#point-b-label", "B"],
    ["#point-gamma-label", "H_{\\max}"],
    ["#weight-label", "\\vec{w}"],
    ["#weight-x-label", "\\vec{w}_x"],
    ["#weight-y-label", "\\vec{w}_y"],
    ["#tension-label", "\\vec{T}"],
    ["#result-symbol-h", "h"],
    ["#result-symbol-angle", "\\varphi"],
    ["#result-symbol-h-max", "h_{\\max}"],
    ["#result-symbol-tension", "T"],
    ["#result-symbol-weight", "W"],
    ["#result-symbol-weight-y", "W_y"],
    ["#result-symbol-weight-x", "W_x"],
  ]);

  staticExpressions.forEach((expression, selector) => {
    renderLatex(document.querySelector(selector), expression);
  });
}

function parameterValue(key) {
  const input = document.querySelector(`#${key}-number`);
  const value = numericInputValue(input);
  return Number.isFinite(value) ? value : 0;
}

function decimal(value, digits = 1) {
  const safeValue = Math.abs(value) < 0.000001 ? 0 : value;
  return Number(safeValue).toFixed(digits).replace(".", ",");
}

function latexNumber(value, digits = 1) {
  return decimal(value, digits).replace(",", "{,}");
}

function renderMeasurement(
  element,
  value,
  isAvailable,
  digits,
  unitLatex,
  unitText,
) {
  if (!isAvailable) {
    renderLatex(element, "\\text{--}", "–");
    return;
  }
  renderLatex(
    element,
    `${latexNumber(value, digits)}\\,${unitLatex}`,
    `${decimal(value, digits)} ${unitText}`,
  );
}

function tautState(time, radius, mass, gravity, phi, omega) {
  const speed = Math.abs(radius * omega);
  const tension = mass * (
    radius * omega ** 2 + gravity * Math.cos(phi)
  );
  return {
    t: time,
    phase: "taut",
    phi,
    omega,
    x: radius * Math.sin(phi),
    y: -radius * Math.cos(phi),
    vx: radius * omega * Math.cos(phi),
    vy: radius * omega * Math.sin(phi),
    speed,
    tension,
  };
}

function projectileState(time, x, y, velocityX, velocityY) {
  return {
    t: time,
    phase: "projectile",
    phi: Math.atan2(x, -y),
    omega: null,
    x,
    y,
    vx: velocityX,
    vy: velocityY,
    speed: Math.hypot(velocityX, velocityY),
    tension: 0,
  };
}

function roadState(time, x, radius, mass, gravity, velocityX, phase) {
  return {
    t: time,
    phase,
    phi: 0,
    omega: null,
    x,
    y: -radius,
    vx: velocityX,
    vy: 0,
    speed: Math.abs(velocityX),
    tension: mass * gravity,
  };
}

function rk4PendulumStep(phi, omega, timeStep, radius, gravity) {
  const angularAcceleration = (angle) => -(gravity / radius) * Math.sin(angle);
  const k1Phi = omega;
  const k1Omega = angularAcceleration(phi);
  const k2Phi = omega + 0.5 * timeStep * k1Omega;
  const k2Omega = angularAcceleration(phi + 0.5 * timeStep * k1Phi);
  const k3Phi = omega + 0.5 * timeStep * k2Omega;
  const k3Omega = angularAcceleration(phi + 0.5 * timeStep * k2Phi);
  const k4Phi = omega + timeStep * k3Omega;
  const k4Omega = angularAcceleration(phi + timeStep * k3Phi);
  return {
    phi:
      phi +
      (timeStep / 6) * (k1Phi + 2 * k2Phi + 2 * k3Phi + k4Phi),
    omega:
      omega +
      (timeStep / 6) *
        (k1Omega + 2 * k2Omega + 2 * k3Omega + k4Omega),
  };
}

function findFirstMaximumState(samples) {
  const velocityTolerance = 1e-8;
  if (
    samples.length > 1 &&
    Math.abs(samples[0].vy) <= velocityTolerance &&
    samples[1].vy < -velocityTolerance
  ) {
    return samples[0];
  }

  for (let index = 1; index < samples.length; index += 1) {
    const before = samples[index - 1];
    const after = samples[index];
    if (before.vy > velocityTolerance && after.vy <= velocityTolerance) {
      if (before.phase !== after.phase) return after;
      const fraction = clamp(
        before.vy / Math.max(before.vy - after.vy, EVENT_EPSILON),
        0,
        1,
      );
      const interpolate = (key) =>
        before[key] + (after[key] - before[key]) * fraction;
      return {
        t: interpolate("t"),
        phase: before.phase,
        phi: interpolate("phi"),
        omega:
          Number.isFinite(before.omega) && Number.isFinite(after.omega)
            ? interpolate("omega")
            : null,
        x: interpolate("x"),
        y: interpolate("y"),
        vx: interpolate("vx"),
        vy: 0,
        speed: interpolate("speed"),
        tension: interpolate("tension"),
      };
    }
  }

  return samples.reduce(
    (maximum, sample) => (sample.y > maximum.y ? sample : maximum),
    samples[0],
  );
}

function createStringModel(options = {}) {
  const radius = Math.max(parameterValue("radius"), 0.000001);
  const mass = Math.max(parameterValue("mass"), 0);
  const gravity = Math.max(parameterValue("gravity"), 0.000001);
  const phi0 = options.phi0 ?? (parameterValue("angle") * Math.PI) / 180;
  const speed0 = Math.max(parameterValue("speed"), 0);
  const omega0 = speed0 / radius;
  const lambda = speed0 ** 2 / (gravity * radius) - 2 * Math.cos(phi0);
  const initialTension = mass * (speed0 ** 2 / radius + gravity * Math.cos(phi0));
  const duration = options.duration ?? 15;
  const naturalTime = Math.sqrt(radius / gravity);
  const referenceAngularSpeed = Math.max(
    Math.abs(omega0),
    Math.sqrt(gravity / radius),
  );
  const timeStep = clamp(
    Math.min(1 / 240, naturalTime / 500, 0.02 / referenceAngularSpeed),
    1 / 5000,
    1 / 120,
  );
  const circleTolerance = Math.max(radius ** 2 * 1e-10, 1e-12);
  let phase = initialTension < -EVENT_EPSILON ? "projectile" : "taut";
  let phi = phi0;
  let omega = omega0;
  let x = radius * Math.sin(phi0);
  let y = -radius * Math.cos(phi0);
  let velocityX = speed0 * Math.cos(phi0);
  let velocityY = speed0 * Math.sin(phi0);
  let time = 0;
  let detachmentCount = phase === "projectile" ? 1 : 0;
  let reattachmentCount = 0;
  let hasMovedInsideCircle = false;
  const initialState = phase === "taut"
    ? tautState(0, radius, mass, gravity, phi, omega)
    : projectileState(0, x, y, velocityX, velocityY);
  const samples = [initialState];

  while (time < duration - EVENT_EPSILON) {
    const step = Math.min(timeStep, duration - time);

    if (phase === "taut") {
      const currentState = tautState(time, radius, mass, gravity, phi, omega);
      const next = rk4PendulumStep(phi, omega, step, radius, gravity);
      const nextState = tautState(
        time + step,
        radius,
        mass,
        gravity,
        next.phi,
        next.omega,
      );
      const energyLambda =
        (radius * omega ** 2) / gravity - 2 * Math.cos(phi);

      if (
        currentState.tension <= EVENT_EPSILON &&
        energyLambda > 1e-7 &&
        nextState.tension < -EVENT_EPSILON
      ) {
        phase = "projectile";
        x = currentState.x;
        y = currentState.y;
        velocityX = currentState.vx;
        velocityY = currentState.vy;
        detachmentCount += 1;
        hasMovedInsideCircle = false;
        samples[samples.length - 1] = projectileState(
          time,
          x,
          y,
          velocityX,
          velocityY,
        );
        continue;
      }

      if (
        currentState.tension > EVENT_EPSILON &&
        nextState.tension <= 0 &&
        energyLambda > 1e-7
      ) {
        let lower = 0;
        let upper = step;
        for (let iteration = 0; iteration < 50; iteration += 1) {
          const middle = (lower + upper) / 2;
          const middleMotion = rk4PendulumStep(
            phi,
            omega,
            middle,
            radius,
            gravity,
          );
          const middleState = tautState(
            time + middle,
            radius,
            mass,
            gravity,
            middleMotion.phi,
            middleMotion.omega,
          );
          if (middleState.tension > 0) lower = middle;
          else upper = middle;
        }
        const eventMotion = rk4PendulumStep(
          phi,
          omega,
          upper,
          radius,
          gravity,
        );
        const eventState = tautState(
          time + upper,
          radius,
          mass,
          gravity,
          eventMotion.phi,
          eventMotion.omega,
        );
        time += upper;
        phase = "projectile";
        phi = eventMotion.phi;
        omega = eventMotion.omega;
        x = eventState.x;
        y = eventState.y;
        velocityX = eventState.vx;
        velocityY = eventState.vy;
        detachmentCount += 1;
        hasMovedInsideCircle = false;
        samples.push(projectileState(time, x, y, velocityX, velocityY));
        continue;
      }

      time += step;
      phi = next.phi;
      omega = next.omega;
      samples.push(nextState);
      continue;
    }

    const nextX = x + velocityX * step;
    const nextY = y + velocityY * step - 0.5 * gravity * step ** 2;
    const nextVelocityY = velocityY - gravity * step;
    const currentCircleDifference = x ** 2 + y ** 2 - radius ** 2;
    const nextCircleDifference = nextX ** 2 + nextY ** 2 - radius ** 2;
    if (currentCircleDifference < -circleTolerance) {
      hasMovedInsideCircle = true;
    }

    if (hasMovedInsideCircle && nextCircleDifference >= 0) {
      const circleDifferenceAt = (flightTime) => {
        const eventX = x + velocityX * flightTime;
        const eventY =
          y + velocityY * flightTime - 0.5 * gravity * flightTime ** 2;
        return eventX ** 2 + eventY ** 2 - radius ** 2;
      };
      let lower = 0;
      let upper = step;
      for (let iteration = 0; iteration < 60; iteration += 1) {
        const middle = (lower + upper) / 2;
        if (circleDifferenceAt(middle) < 0) lower = middle;
        else upper = middle;
      }

      const eventTime = upper;
      x += velocityX * eventTime;
      y += velocityY * eventTime - 0.5 * gravity * eventTime ** 2;
      velocityY -= gravity * eventTime;
      const distance = Math.max(Math.hypot(x, y), EVENT_EPSILON);
      x = (x / distance) * radius;
      y = (y / distance) * radius;
      const radialX = x / radius;
      const radialY = y / radius;
      const tangentX = -radialY;
      const tangentY = radialX;
      const tangentialSpeed = velocityX * tangentX + velocityY * tangentY;
      velocityX = tangentialSpeed * tangentX;
      velocityY = tangentialSpeed * tangentY;
      phi = Math.atan2(x, -y);
      omega = tangentialSpeed / radius;
      time += eventTime;
      const attachedState = tautState(time, radius, mass, gravity, phi, omega);
      const attachedProbe = rk4PendulumStep(
        phi,
        omega,
        timeStep,
        radius,
        gravity,
      );
      const probeTension = tautState(
        time + timeStep,
        radius,
        mass,
        gravity,
        attachedProbe.phi,
        attachedProbe.omega,
      ).tension;
      phase =
        attachedState.tension >= -EVENT_EPSILON || probeTension > 0
          ? "taut"
          : "projectile";
      reattachmentCount += 1;
      hasMovedInsideCircle = false;
      if (phase === "taut") {
        samples.push(attachedState);
      } else {
        detachmentCount += 1;
        samples.push(projectileState(time, x, y, velocityX, velocityY));
      }
      continue;
    }

    time += step;
    x = nextX;
    y = nextY;
    velocityY = nextVelocityY;
    samples.push(projectileState(time, x, y, velocityX, velocityY));
  }

  const outcome = detachmentCount > 0
    ? "hybrid-motion"
    : lambda >= 3 - EVENT_EPSILON
      ? "looping"
      : "oscillation";
  const firstMaximumState = findFirstMaximumState(samples);

  return {
    radius,
    mass,
    gravity,
    phi0,
    speed0,
    lambda,
    initialTension,
    outcome,
    detachmentCount,
    reattachmentCount,
    firstMaximumState,
    maximumHeight: firstMaximumState.y + radius,
    samples,
    finalTime: duration,
  };
}

function createRodModel() {
  const radius = Math.max(parameterValue("radius"), 0.000001);
  const mass = Math.max(parameterValue("mass"), 0);
  const gravity = Math.max(parameterValue("gravity"), 0.000001);
  const phi0 = (parameterValue("angle") * Math.PI) / 180;
  const speed0 = Math.max(parameterValue("speed"), 0);
  const omega0 = speed0 / radius;
  const lambda = speed0 ** 2 / (gravity * radius) - 2 * Math.cos(phi0);
  const initialTension = mass * (
    speed0 ** 2 / radius + gravity * Math.cos(phi0)
  );
  const duration = 15;
  const naturalTime = Math.sqrt(radius / gravity);
  const referenceAngularSpeed = Math.max(
    Math.abs(omega0),
    Math.sqrt(gravity / radius),
  );
  const timeStep = clamp(
    Math.min(1 / 240, naturalTime / 500, 0.02 / referenceAngularSpeed),
    1 / 5000,
    1 / 120,
  );
  let time = 0;
  let phi = phi0;
  let omega = omega0;
  const samples = [tautState(0, radius, mass, gravity, phi, omega)];

  while (time < duration - EVENT_EPSILON) {
    const step = Math.min(timeStep, duration - time);
    const next = rk4PendulumStep(phi, omega, step, radius, gravity);
    time += step;
    phi = next.phi;
    omega = next.omega;
    samples.push(tautState(time, radius, mass, gravity, phi, omega));
  }

  const outcome = lambda > 2 + EVENT_EPSILON ? "looping" : "oscillation";
  const firstMaximumState = findFirstMaximumState(samples);
  return {
    radius,
    mass,
    gravity,
    phi0,
    speed0,
    lambda,
    initialTension,
    outcome,
    detachmentCount: 0,
    reattachmentCount: 0,
    firstMaximumState,
    maximumHeight: firstMaximumState.y + radius,
    samples,
    finalTime: duration,
  };
}

function createCircularGuideModel() {
  const radius = Math.max(parameterValue("radius"), 0.000001);
  const mass = Math.max(parameterValue("mass"), 0);
  const gravity = Math.max(parameterValue("gravity"), 0.000001);
  const speed0 = Math.max(parameterValue("speed"), 0);
  const approachDistance = 2 * radius;
  const roadEndPosition = WORLD_WIDTH / (2 * PIXELS_PER_METER);
  const circleSearchDuration = Math.max(
    20,
    8 * Math.PI * Math.sqrt(radius / gravity),
  );
  const lambda = speed0 ** 2 / (gravity * radius) - 2;
  const initialTension = mass * (speed0 ** 2 / radius + gravity);
  const approachStart = roadState(
    0,
    -approachDistance,
    radius,
    mass,
    gravity,
    speed0,
    "road-approach",
  );

  if (speed0 <= EVENT_EPSILON) {
    const samples = [approachStart];
    return {
      radius,
      mass,
      gravity,
      phi0: 0,
      speed0,
      lambda,
      initialTension,
      outcome: "oscillation",
      exitDirection: null,
      detachmentCount: 0,
      reattachmentCount: 0,
      firstMaximumState: samples[0],
      maximumHeight: 0,
      samples,
      finalTime: 0,
    };
  }

  const entryTime = approachDistance / speed0;
  const circleModel = createStringModel({
    phi0: 0,
    duration: circleSearchDuration,
  });
  let exitEvent = null;
  for (let index = 1; index < circleModel.samples.length; index += 1) {
    const before = circleModel.samples[index - 1];
    const after = circleModel.samples[index];
    if (before.phase !== "taut" || after.phase !== "taut") continue;
    const belowCenter = before.y < 0 && after.y < 0;
    const exitsRight =
      belowCenter &&
      before.x < -EVENT_EPSILON &&
      after.x >= 0 &&
      after.omega > 0;
    const exitsLeft =
      belowCenter &&
      before.x > EVENT_EPSILON &&
      after.x <= 0 &&
      after.omega < 0;
    if (!exitsRight && !exitsLeft) continue;

    const fraction = clamp(
      Math.abs(before.x) / Math.max(Math.abs(before.x) + Math.abs(after.x), EVENT_EPSILON),
      0,
      1,
    );
    exitEvent = {
      index,
      circleTime: before.t + (after.t - before.t) * fraction,
      direction: exitsRight ? 1 : -1,
      speed: before.speed + (after.speed - before.speed) * fraction,
    };
    break;
  }

  const samples = [
    approachStart,
    roadState(entryTime, 0, radius, mass, gravity, speed0, "road-approach"),
  ];
  const circleSampleLimit = exitEvent
    ? exitEvent.index
    : circleModel.samples.length;
  for (let index = 0; index < circleSampleLimit; index += 1) {
    const sample = circleModel.samples[index];
    samples.push({ ...sample, t: entryTime + sample.t });
  }

  let exitDirection = null;
  let finalTime = entryTime + circleSearchDuration;
  if (exitEvent) {
    exitDirection = exitEvent.direction > 0 ? "right" : "left";
    const exitTime = entryTime + exitEvent.circleTime;
    const roadVelocity = exitEvent.direction * exitEvent.speed;
    const roadEndX = exitEvent.direction * roadEndPosition;
    const roadTravelTime =
      Math.abs(roadEndX) / Math.max(exitEvent.speed, EVENT_EPSILON);
    finalTime = exitTime + roadTravelTime;
    samples.push(
      roadState(
        exitTime,
        0,
        radius,
        mass,
        gravity,
        roadVelocity,
        exitDirection === "right" ? "road-right" : "road-left",
      ),
    );
    samples.push(
      roadState(
        finalTime,
        roadEndX,
        radius,
        mass,
        gravity,
        roadVelocity,
        exitDirection === "right" ? "road-right" : "road-left",
      ),
    );
  }

  let detachmentCount = 0;
  let reattachmentCount = 0;
  for (let index = 1; index < samples.length; index += 1) {
    const previousPhase = samples[index - 1].phase;
    const currentPhase = samples[index].phase;
    if (previousPhase === "taut" && currentPhase === "projectile") {
      detachmentCount += 1;
    }
    if (previousPhase === "projectile" && currentPhase === "taut") {
      reattachmentCount += 1;
    }
  }
  const outcome = detachmentCount > 0
    ? "hybrid-motion"
    : lambda >= 3 - EVENT_EPSILON
      ? "looping"
      : "oscillation";
  const firstMaximumState = findFirstMaximumState(samples);

  return {
    radius,
    mass,
    gravity,
    phi0: 0,
    speed0,
    lambda,
    initialTension,
    outcome,
    exitDirection,
    detachmentCount,
    reattachmentCount,
    firstMaximumState,
    maximumHeight: firstMaximumState.y + radius,
    samples,
    finalTime,
  };
}

function stateAtTime(model, time) {
  if (!model?.samples.length) return null;
  if (time <= 0) return model.samples[0];
  if (time >= model.finalTime) return model.samples.at(-1);

  let lower = 0;
  let upper = model.samples.length - 1;
  while (upper - lower > 1) {
    const middle = Math.floor((lower + upper) / 2);
    if (model.samples[middle].t <= time) lower = middle;
    else upper = middle;
  }

  const before = model.samples[lower];
  const after = model.samples[upper];
  const fraction = clamp((time - before.t) / (after.t - before.t), 0, 1);
  const interpolate = (key) => before[key] + (after[key] - before[key]) * fraction;
  return {
    t: time,
    phase:
      before.phase === after.phase || time < after.t - EVENT_EPSILON
        ? before.phase
        : after.phase,
    phi: interpolate("phi"),
    omega:
      Number.isFinite(before.omega) && Number.isFinite(after.omega)
        ? interpolate("omega")
        : null,
    x: interpolate("x"),
    y: interpolate("y"),
    vx: interpolate("vx"),
    vy: interpolate("vy"),
    speed: interpolate("speed"),
    tension: interpolate("tension"),
  };
}

function setSvgLine(line, x1, y1, x2, y2) {
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
}

function setArrowHead(head, tipX, tipY, directionX, directionY, inverseScale) {
  const length = VECTOR_HEAD_LENGTH_PX * inverseScale;
  const halfHeight = VECTOR_HEAD_HALF_HEIGHT_PX * inverseScale;
  const baseX = tipX - directionX * length;
  const baseY = tipY - directionY * length;
  const perpendicularX = -directionY * halfHeight;
  const perpendicularY = directionX * halfHeight;
  head.setAttribute(
    "points",
    `${tipX},${tipY} ${baseX + perpendicularX},${baseY + perpendicularY} ${baseX - perpendicularX},${baseY - perpendicularY}`,
  );
}

function setElementVisible(element, visible) {
  element.toggleAttribute("hidden", !visible);
}

function labelOffset(element) {
  return {
    x: Number(element.dataset.labelOffsetX) || 0,
    y: Number(element.dataset.labelOffsetY) || 0,
  };
}

function applyLabelTransform(element, baseTransform = "") {
  const offset = labelOffset(element);
  element.dataset.labelBaseTransform = baseTransform;
  const offsetTransform = `translate(${offset.x}px, ${offset.y}px)`;
  element.style.transform = baseTransform
    ? `${baseTransform} ${offsetTransform}`
    : offsetTransform;
}

function finishLabelDrag(event) {
  if (
    !labelDrag.active ||
    (event && event.pointerId !== labelDrag.pointerId)
  ) {
    return;
  }
  const element = labelDrag.element;
  labelDrag.active = false;
  labelDrag.element = null;
  labelDrag.pointerId = null;
  element?.classList.remove("is-label-dragging");
}

function initializeDraggableSimulationLabels() {
  const selector = [
    ".mass-label",
    ".fixed-point-label",
    ".vector-label",
    ".geometry-label",
  ].join(", ");

  document.querySelectorAll(selector).forEach((label) => {
    label.classList.add("draggable-sim-label");
    label.dataset.labelOffsetX ||= "0";
    label.dataset.labelOffsetY ||= "0";
    applyLabelTransform(label, label.style.transform || "");

    label.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;
      event.preventDefault();
      event.stopPropagation();
      labelDrag.active = true;
      labelDrag.element = label;
      labelDrag.pointerId = event.pointerId;
      labelDrag.startClientX = event.clientX / applicationZoom;
      labelDrag.startClientY = event.clientY / applicationZoom;
      labelDrag.startOffsetX = Number(label.dataset.labelOffsetX) || 0;
      labelDrag.startOffsetY = Number(label.dataset.labelOffsetY) || 0;
      label.classList.add("is-label-dragging");
      label.setPointerCapture(event.pointerId);
    });

    label.addEventListener("pointermove", (event) => {
      if (
        !labelDrag.active ||
        labelDrag.element !== label ||
        labelDrag.pointerId !== event.pointerId
      ) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      let offsetX =
        labelDrag.startOffsetX +
        event.clientX / applicationZoom -
        labelDrag.startClientX;
      let offsetY =
        labelDrag.startOffsetY +
        event.clientY / applicationZoom -
        labelDrag.startClientY;
      const distance = Math.hypot(offsetX, offsetY);
      if (distance > LABEL_DRAG_RADIUS_PX) {
        const scale = LABEL_DRAG_RADIUS_PX / distance;
        offsetX *= scale;
        offsetY *= scale;
      }
      label.dataset.labelOffsetX = String(offsetX);
      label.dataset.labelOffsetY = String(offsetY);
      applyLabelTransform(label, label.dataset.labelBaseTransform || "");
    });

    label.addEventListener("pointerup", finishLabelDrag);
    label.addEventListener("pointercancel", finishLabelDrag);
    label.addEventListener("lostpointercapture", finishLabelDrag);
    label.addEventListener("dblclick", (event) => {
      event.preventDefault();
      event.stopPropagation();
      label.dataset.labelOffsetX = "0";
      label.dataset.labelOffsetY = "0";
      applyLabelTransform(label, label.dataset.labelBaseTransform || "");
    });
  });
}

function renderVelocityVector(
  bodyX,
  bodyY,
  velocityX,
  velocityY,
  inverseScale,
  isInitialState,
  isVisible,
) {
  const speed = Math.hypot(velocityX, velocityY);
  const directionX = speed > 0 ? velocityX / speed : 0;
  const directionY = speed > 0 ? -velocityY / speed : 0;
  const vectorLength = speed * VECTOR_LENGTH_PER_SPEED_PX;
  const endX = bodyX + directionX * vectorLength;
  const endY = bodyY + directionY * vectorLength;
  const headLength = VECTOR_HEAD_LENGTH_PX * inverseScale;
  const headBaseX = endX - directionX * headLength;
  const headBaseY = endY - directionY * headLength;
  const headHalfHeight = VECTOR_HEAD_HALF_HEIGHT_PX * inverseScale;
  const perpendicularX = -directionY * headHalfHeight;
  const perpendicularY = directionX * headHalfHeight;

  velocityVector.setAttribute("x1", bodyX);
  velocityVector.setAttribute("y1", bodyY);
  velocityVector.setAttribute("x2", endX);
  velocityVector.setAttribute("y2", endY);
  velocityVector.style.strokeWidth = `${2 * inverseScale}px`;
  velocityVectorHead.setAttribute(
    "points",
    `${endX},${endY} ${headBaseX + perpendicularX},${headBaseY + perpendicularY} ${headBaseX - perpendicularX},${headBaseY - perpendicularY}`,
  );

  const showsVelocity = isVisible && speed > 0;
  velocityVector.style.opacity = showsVelocity ? "1" : "0";
  velocityVectorHead.style.opacity = showsVelocity ? "1" : "0";
  velocityVectorLabel.hidden = !showsVelocity;
  velocityVectorLabel.style.left = `${endX}px`;
  velocityVectorLabel.style.top = `${endY - 17 * inverseScale}px`;
  renderLatex(
    velocityVectorLabel,
    isInitialState ? "\\vec{u}_0" : "\\vec{v}",
  );
  applyLabelTransform(
    velocityVectorLabel,
    `translate(-50%, -100%) scale(${inverseScale})`,
  );
}

function positionDiagramLabel(
  label,
  x,
  y,
  expression,
  inverseScale,
  baseTransform = `translate(-50%, -50%) scale(${inverseScale})`,
) {
  label.style.left = `${x}px`;
  label.style.top = `${y}px`;
  setElementVisible(label, true);
  applyLabelTransform(label, baseTransform);
  if (expression) renderLatex(label, expression);
}

function renderHeightGeometry(
  stringLength,
  bodyX,
  bodyY,
  inverseScale,
  isVisible,
) {
  if (!isVisible) {
    [zeroHeightLabel, heightLabel].forEach((label) =>
      setElementVisible(label, false),
    );
    return;
  }

  const baselineY = ORIGIN_Y + stringLength;
  const horizontalStartX = ORIGIN_X - stringLength - 54 * inverseScale;
  const dimensionX = ORIGIN_X + stringLength + 48 * inverseScale;
  const capHalfWidth = 7 * inverseScale;
  const height = (baselineY - bodyY) / PIXELS_PER_METER;
  const hasHeight = Math.abs(height) > 1e-6;

  setSvgLine(
    zeroHeightReference,
    horizontalStartX,
    baselineY,
    dimensionX,
    baselineY,
  );
  setSvgLine(
    bodyHeightReference,
    horizontalStartX,
    bodyY,
    dimensionX,
    bodyY,
  );
  [zeroHeightReference, bodyHeightReference].forEach((line) => {
    line.style.strokeWidth = `${0.9 * inverseScale}px`;
    line.style.strokeDasharray = `${6 * inverseScale} ${6 * inverseScale}`;
  });

  setSvgLine(heightDimension, dimensionX, baselineY, dimensionX, bodyY);
  setSvgLine(
    heightDimensionCapZero,
    dimensionX - capHalfWidth,
    baselineY,
    dimensionX + capHalfWidth,
    baselineY,
  );
  setSvgLine(
    heightDimensionCapBody,
    dimensionX - capHalfWidth,
    bodyY,
    dimensionX + capHalfWidth,
    bodyY,
  );
  [heightDimension, heightDimensionCapZero, heightDimensionCapBody].forEach(
    (line) => {
      line.style.strokeWidth = `${inverseScale}px`;
    },
  );

  positionDiagramLabel(
    zeroHeightLabel,
    horizontalStartX - 7 * inverseScale,
    baselineY,
    "h_0",
    inverseScale,
    `translate(-100%, -50%) scale(${inverseScale})`,
  );
  setElementVisible(heightLabel, hasHeight);
  if (hasHeight) {
    positionDiagramLabel(
      heightLabel,
      dimensionX + 13 * inverseScale,
      (baselineY + bodyY) / 2,
      `h=${decimal(height, 1)}\\,\\mathrm{m}`,
      inverseScale,
      `translate(0, -50%) scale(${inverseScale})`,
    );
  }

}

function renderAngleGeometry(
  arc,
  head,
  label,
  angleRadians,
  arcRadius,
  expression,
  inverseScale,
  isVisible,
) {
  const showsAngle = isVisible && Math.abs(angleRadians) > 1e-7;
  [arc, head, label].forEach((element) =>
    setElementVisible(element, showsAngle),
  );
  if (!showsAngle) return;

  const startX = ORIGIN_X;
  const startY = ORIGIN_Y + arcRadius;
  const endX = ORIGIN_X + arcRadius * Math.sin(angleRadians);
  const endY = ORIGIN_Y + arcRadius * Math.cos(angleRadians);
  const sweepFlag = angleRadians >= 0 ? 0 : 1;
  const isFullCircle = Math.abs(angleRadians) >= 2 * Math.PI - 1e-7;
  if (isFullCircle) {
    const middleX = ORIGIN_X;
    const middleY = ORIGIN_Y - arcRadius;
    arc.setAttribute(
      "d",
      `M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 0 ${sweepFlag} ${middleX} ${middleY} A ${arcRadius} ${arcRadius} 0 0 ${sweepFlag} ${endX} ${endY}`,
    );
  } else {
    const largeArcFlag = Math.abs(angleRadians) > Math.PI ? 1 : 0;
    arc.setAttribute(
      "d",
      `M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`,
    );
  }
  arc.style.strokeWidth = `${1.5 * inverseScale}px`;
  const directionSign = angleRadians >= 0 ? 1 : -1;
  setArrowHead(
    head,
    endX,
    endY,
    directionSign * Math.cos(angleRadians),
    -directionSign * Math.sin(angleRadians),
    0.72 * inverseScale,
  );

  const labelRadius = arcRadius + 17 * inverseScale;
  const halfAngle = angleRadians / 2;
  positionDiagramLabel(
    label,
    ORIGIN_X + labelRadius * Math.sin(halfAngle),
    ORIGIN_Y + labelRadius * Math.cos(halfAngle),
    expression,
    inverseScale,
  );
}

function counterclockwiseAngleFromVertical(angleRadians) {
  const fullTurn = 2 * Math.PI;
  const normalized = ((angleRadians % fullTurn) + fullTurn) % fullTurn;
  if (normalized < 1e-7 && angleRadians > EVENT_EPSILON) return fullTurn;
  return normalized;
}

function displayedAngleFromVertical(model, state) {
  if (model.outcome === "looping") {
    return counterclockwiseAngleFromVertical(state.phi);
  }
  return Math.atan2(state.x, -state.y);
}

function renderGeometryPoint(
  point,
  label,
  pointX,
  pointY,
  expression,
  inverseScale,
  isVisible,
  tangentOffset = 0,
) {
  [point, label].forEach((element) => setElementVisible(element, isVisible));
  if (!isVisible) return;

  point.setAttribute("cx", pointX);
  point.setAttribute("cy", pointY);
  point.setAttribute("r", 4 * inverseScale);
  point.style.strokeWidth = `${inverseScale}px`;
  const radialX = pointX - ORIGIN_X;
  const radialY = pointY - ORIGIN_Y;
  const radialLength = Math.max(Math.hypot(radialX, radialY), EVENT_EPSILON);
  const unitX = radialX / radialLength;
  const unitY = radialY / radialLength;
  const tangentX = -unitY;
  const tangentY = unitX;
  positionDiagramLabel(
    label,
    pointX + unitX * 16 * inverseScale + tangentX * tangentOffset * inverseScale,
    pointY + unitY * 16 * inverseScale + tangentY * tangentOffset * inverseScale,
    expression,
    inverseScale,
  );
}

function renderWeightVector(
  bodyX,
  bodyY,
  angle,
  angleRadians,
  mass,
  gravity,
  inverseScale,
  isVisible,
  allowsComponents,
) {
  const allWeightElements = [
    weightVector,
    weightVectorHead,
    weightLabel,
    weightXComponent,
    weightXComponentHead,
    weightYComponent,
    weightYComponentHead,
    weightProjectionFromX,
    weightProjectionFromY,
    weightXLabel,
    weightYLabel,
  ];
  if (!isVisible) {
    allWeightElements.forEach((element) => setElementVisible(element, false));
    return;
  }

  const weightLength = mass * gravity * FORCE_LENGTH_PER_NEWTON_PX;
  const weightEndX = bodyX;
  const weightEndY = bodyY + weightLength;
  setSvgLine(weightVector, bodyX, bodyY, weightEndX, weightEndY);
  weightVector.style.strokeWidth = `${2 * inverseScale}px`;
  setArrowHead(
    weightVectorHead,
    weightEndX,
    weightEndY,
    0,
    1,
    inverseScale,
  );
  setElementVisible(weightVector, true);
  setElementVisible(weightVectorHead, true);
  positionDiagramLabel(
    weightLabel,
    bodyX + 13 * inverseScale,
    bodyY + weightLength * 0.62,
    "\\vec{w}",
    inverseScale,
    `translate(0, -50%) scale(${inverseScale})`,
  );

  const normalizedAngle = ((angle % 360) + 360) % 360;
  const isCardinalAngle = [0, 90, 180, 270].some(
    (cardinal) => Math.abs(normalizedAngle - cardinal) < 1e-6,
  );
  const showsComponents = allowsComponents && !isCardinalAngle;
  [
    weightXComponent,
    weightXComponentHead,
    weightYComponent,
    weightYComponentHead,
    weightProjectionFromX,
    weightProjectionFromY,
    weightXLabel,
    weightYLabel,
  ].forEach((element) => setElementVisible(element, showsComponents));
  if (!showsComponents) return;

  const radialX = Math.sin(angleRadians);
  const radialY = Math.cos(angleRadians);
  const tangentX = Math.cos(angleRadians);
  const tangentY = -Math.sin(angleRadians);
  const radialMagnitude = weightLength * Math.cos(angleRadians);
  const tangentMagnitude = -weightLength * Math.sin(angleRadians);
  const radialEndX = bodyX + radialX * radialMagnitude;
  const radialEndY = bodyY + radialY * radialMagnitude;
  const tangentEndX = bodyX + tangentX * tangentMagnitude;
  const tangentEndY = bodyY + tangentY * tangentMagnitude;

  setSvgLine(weightYComponent, bodyX, bodyY, radialEndX, radialEndY);
  setSvgLine(weightXComponent, bodyX, bodyY, tangentEndX, tangentEndY);
  [weightYComponent, weightXComponent].forEach((line) => {
    line.style.strokeWidth = `${1.5 * inverseScale}px`;
  });
  const radialLength = Math.max(Math.abs(radialMagnitude), 1e-9);
  const tangentLength = Math.max(Math.abs(tangentMagnitude), 1e-9);
  setArrowHead(
    weightYComponentHead,
    radialEndX,
    radialEndY,
    (radialEndX - bodyX) / radialLength,
    (radialEndY - bodyY) / radialLength,
    0.78 * inverseScale,
  );
  setArrowHead(
    weightXComponentHead,
    tangentEndX,
    tangentEndY,
    (tangentEndX - bodyX) / tangentLength,
    (tangentEndY - bodyY) / tangentLength,
    0.78 * inverseScale,
  );

  setSvgLine(
    weightProjectionFromY,
    radialEndX,
    radialEndY,
    weightEndX,
    weightEndY,
  );
  setSvgLine(
    weightProjectionFromX,
    tangentEndX,
    tangentEndY,
    weightEndX,
    weightEndY,
  );
  [weightProjectionFromY, weightProjectionFromX].forEach((line) => {
    line.style.strokeWidth = `${inverseScale}px`;
    line.style.strokeDasharray = `${5 * inverseScale} ${4 * inverseScale}`;
  });

  positionDiagramLabel(
    weightYLabel,
    (bodyX + radialEndX) / 2 + 12 * inverseScale,
    (bodyY + radialEndY) / 2,
    "\\vec{w}_y",
    inverseScale,
  );
  positionDiagramLabel(
    weightXLabel,
    (bodyX + tangentEndX) / 2,
    (bodyY + tangentEndY) / 2 - 12 * inverseScale,
    "\\vec{w}_x",
    inverseScale,
  );
}

function renderTensionVector(
  bodyX,
  bodyY,
  tension,
  inverseScale,
  isVisible,
  expression = "\\vec{T}",
  directionOverride = null,
  allowsSignedForce = false,
) {
  const showsTension =
    isVisible &&
    (allowsSignedForce
      ? Math.abs(tension) > EVENT_EPSILON
      : tension > EVENT_EPSILON);
  [tensionVector, tensionVectorHead, tensionLabel].forEach((element) =>
    setElementVisible(element, showsTension),
  );
  if (!showsTension) return;

  const towardOriginX = ORIGIN_X - bodyX;
  const towardOriginY = ORIGIN_Y - bodyY;
  const radialDistance = Math.max(
    Math.hypot(towardOriginX, towardOriginY),
    EVENT_EPSILON,
  );
  const forceDirectionSign = allowsSignedForce && tension < 0 ? -1 : 1;
  const directionX =
    (directionOverride?.x ?? towardOriginX / radialDistance) *
    forceDirectionSign;
  const directionY =
    (directionOverride?.y ?? towardOriginY / radialDistance) *
    forceDirectionSign;
  const vectorLength = Math.abs(tension) * FORCE_LENGTH_PER_NEWTON_PX;
  const endX = bodyX + directionX * vectorLength;
  const endY = bodyY + directionY * vectorLength;

  setSvgLine(tensionVector, bodyX, bodyY, endX, endY);
  tensionVector.style.strokeWidth = `${2 * inverseScale}px`;
  setArrowHead(
    tensionVectorHead,
    endX,
    endY,
    directionX,
    directionY,
    inverseScale,
  );
  positionDiagramLabel(
    tensionLabel,
    (bodyX + endX) / 2 - directionY * 12 * inverseScale,
    (bodyY + endY) / 2 + directionX * 12 * inverseScale,
    expression,
    inverseScale,
  );
}

function renderResults(model, state, isCircularGuide, isRod) {
  const height = state.y + model.radius;
  const angleDegrees =
    (displayedAngleFromVertical(model, state) * 180) / Math.PI;
  const weight = model.mass * model.gravity;
  const speed = Math.hypot(state.vx, state.vy);
  const kineticEnergy = 0.5 * model.mass * speed ** 2;
  const potentialEnergy = model.mass * model.gravity * height;
  const mechanicalEnergy = kineticEnergy + potentialEnergy;
  const radialDistance = Math.max(Math.hypot(state.x, state.y), EVENT_EPSILON);
  const cosine = -state.y / radialDistance;
  const sine = state.x / radialDistance;
  const showsComponents =
    state.phase === "taut" &&
    (isRod || state.tension > EVENT_EPSILON);
  const showsAngle =
    state.phase === "taut" &&
    (isRod || state.tension > EVENT_EPSILON);

  renderLatex(
    resultTensionSymbol,
    isCircularGuide ? "N" : isRod ? "F_{\\rho}" : "T",
  );
  if (showsAngle) {
    renderLatex(
      resultAngle,
      `${latexNumber(angleDegrees, 1)}^{\\circ}`,
      `${decimal(angleDegrees, 1)}°`,
    );
  } else {
    renderLatex(resultAngle, "\\text{--}", "–");
  }
  renderMeasurement(resultHeight, height, true, 2, "\\mathrm{m}", "m");
  renderMeasurement(
    resultMaximumHeight,
    model.maximumHeight,
    true,
    2,
    "\\mathrm{m}",
    "m",
  );
  renderMeasurement(
    resultSpeed,
    speed,
    true,
    2,
    "\\mathrm{m/s}",
    "m/s",
  );
  renderMeasurement(
    resultTension,
    isRod ? state.tension : Math.max(state.tension, 0),
    true,
    2,
    "\\mathrm{N}",
    "N",
  );
  renderMeasurement(resultWeight, weight, true, 2, "\\mathrm{N}", "N");
  renderMeasurement(
    resultWeightY,
    weight * cosine,
    showsComponents,
    2,
    "\\mathrm{N}",
    "N",
  );
  renderMeasurement(
    resultWeightX,
    -weight * sine,
    showsComponents,
    2,
    "\\mathrm{N}",
    "N",
  );
  renderMeasurement(
    resultKineticEnergy,
    kineticEnergy,
    true,
    2,
    "\\mathrm{J}",
    "J",
  );
  renderMeasurement(
    resultPotentialEnergy,
    potentialEnergy,
    true,
    2,
    "\\mathrm{J}",
    "J",
  );
  renderMeasurement(
    resultMechanicalEnergy,
    mechanicalEnergy,
    true,
    2,
    "\\mathrm{J}",
    "J",
  );
}

function renderCircularGuide(motionRadius, bodyRadius, inverseScale, isVisible) {
  circularGuideLayer.toggleAttribute("hidden", !isVisible);
  if (!isVisible) return;

  const surfaceWidth = 6 * inverseScale;
  const groundRadius = motionRadius + bodyRadius + surfaceWidth / 2;
  guideSurfaceGradient.setAttribute("x1", ORIGIN_X - groundRadius);
  guideSurfaceGradient.setAttribute("x2", ORIGIN_X + groundRadius);
  guideSurfaceGradient.setAttribute("y1", ORIGIN_Y);
  guideSurfaceGradient.setAttribute("y2", ORIGIN_Y);
  const routePath = (routeRadius, isFront) => {
    const topY = ORIGIN_Y - routeRadius;
    const bottomY = ORIGIN_Y + routeRadius;
    return isFront
      ? `M 0 ${bottomY} L ${ORIGIN_X} ${bottomY} A ${routeRadius} ${routeRadius} 0 0 0 ${ORIGIN_X} ${topY}`
      : `M ${ORIGIN_X} ${topY} A ${routeRadius} ${routeRadius} 0 0 0 ${ORIGIN_X} ${bottomY} L ${WORLD_WIDTH} ${bottomY}`;
  };
  const setTrackPath = (element, routeRadius, isFront, strokeWidth) => {
    element.setAttribute("d", routePath(routeRadius, isFront));
    element.style.strokeWidth = `${strokeWidth * inverseScale}px`;
  };

  setTrackPath(guideBackBed, groundRadius, false, 12);
  setTrackPath(guideBackSurface, groundRadius, false, 6);
  setTrackPath(guideFrontBed, groundRadius, true, 12);
  setTrackPath(guideFrontSurface, groundRadius, true, 6);
}

function renderSlackString(
  bodyX,
  bodyY,
  stringLength,
  inverseScale,
  isSlack,
  isString,
) {
  simulationString.hidden = !isString || isSlack;
  slackStringLayer.toggleAttribute("hidden", !isString || !isSlack);
  if (!isString || !isSlack) return;

  const chordX = bodyX - ORIGIN_X;
  const chordY = bodyY - ORIGIN_Y;
  const chordLength = Math.hypot(chordX, chordY);
  const availableSag = Math.sqrt(
    Math.max(stringLength ** 2 - chordLength ** 2, 0),
  );
  const controlX = (ORIGIN_X + bodyX) / 2;
  const controlY = (ORIGIN_Y + bodyY) / 2 + availableSag * 0.82;
  const path = `M ${ORIGIN_X} ${ORIGIN_Y} Q ${controlX} ${controlY} ${bodyX} ${bodyY}`;
  slackStringOutline.setAttribute("d", path);
  slackString.setAttribute("d", path);
  slackStringOutline.style.strokeWidth = `${5 * inverseScale}px`;
  slackString.style.strokeWidth = `${3 * inverseScale}px`;
  slackString.style.strokeDasharray = `${5 * inverseScale} ${4 * inverseScale}`;
}

function renderMotionTrail(model, state, inverseScale, isEnabled) {
  const isVisible = isEnabled && playback.time > EVENT_EPSILON;
  motionTrailLayer.toggleAttribute("hidden", !isVisible);
  if (!isVisible) {
    motionTrailGlow.removeAttribute("d");
    motionTrailPath.removeAttribute("d");
    return;
  }

  const samples = model.samples;
  let lower = 0;
  let upper = samples.length - 1;
  while (upper - lower > 1) {
    const middle = Math.floor((lower + upper) / 2);
    if (samples[middle].t <= playback.time) lower = middle;
    else upper = middle;
  }

  const endIndex = samples[upper].t <= playback.time ? upper : lower;
  const stride = Math.max(1, Math.ceil(Math.max(endIndex, 1) / 1400));
  const points = [];
  const appendState = (sample) => {
    const x = ORIGIN_X + sample.x * PIXELS_PER_METER;
    const y = ORIGIN_Y - sample.y * PIXELS_PER_METER;
    const previous = points.at(-1);
    if (!previous || Math.hypot(x - previous.x, y - previous.y) > 0.02) {
      points.push({ x, y });
    }
  };

  for (let index = 0; index <= endIndex; index += stride) {
    appendState(samples[index]);
  }
  if (endIndex % stride !== 0) appendState(samples[endIndex]);
  appendState(state);

  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
  motionTrailGlow.setAttribute("d", path);
  motionTrailPath.setAttribute("d", path);
  motionTrailGlow.style.strokeWidth = `${7 * inverseScale}px`;
  motionTrailPath.style.strokeWidth = `${2.2 * inverseScale}px`;
}

function renderSimulation() {
  renderMeasurement(
    resultTime,
    playback.time,
    true,
    2,
    "\\mathrm{s}",
    "s",
  );
  const isString = loopTypeSelect.value === "string";
  const isCircularGuide = loopTypeSelect.value === "circular-guide";
  const isRod = loopTypeSelect.value === "rod";
  const isSupportedArrangement = isString || isCircularGuide || isRod;
  stringSystem.hidden = !isSupportedArrangement;
  displaySettings.hidden = !isSupportedArrangement;
  if (!isSupportedArrangement) {
    updatePlaybackButtons();
    return;
  }

  const model = playback.model || (
    isCircularGuide
      ? createCircularGuideModel()
      : isRod
        ? createRodModel()
        : createStringModel()
  );
  const state = stateAtTime(model, playback.time) || model.samples[0];
  const radius = model.radius;
  const mass = model.mass;
  const positionAngleRadians = Math.atan2(state.x, -state.y);
  const currentAngleRadians = displayedAngleFromVertical(model, state);
  const angle = (positionAngleRadians * 180) / Math.PI;
  const stringLength = radius * PIXELS_PER_METER;
  const bodyX = ORIGIN_X + state.x * PIXELS_PER_METER;
  const bodyY = ORIGIN_Y - state.y * PIXELS_PER_METER;
  const initialBodyX =
    ORIGIN_X + radius * PIXELS_PER_METER * Math.sin(model.phi0);
  const initialBodyY =
    ORIGIN_Y + radius * PIXELS_PER_METER * Math.cos(model.phi0);
  const maximumPointX =
    ORIGIN_X + model.firstMaximumState.x * PIXELS_PER_METER;
  const maximumPointY =
    ORIGIN_Y - model.firstMaximumState.y * PIXELS_PER_METER;
  const inverseScale = 1 / view.scale;
  const bodyRadius = BODY_RADIUS_PX * inverseScale;
  const showsGeometricFeatures = geometricFeaturesCheckbox.checked;
  const showsVectorFeatures = vectorFeaturesCheckbox.checked;
  const showsMotionTrail = motionTrailCheckbox.checked;
  const isSlack = state.phase === "projectile";

  simulationWorld.dataset.simulationOutcome = model.outcome;
  simulationWorld.dataset.simulationPhase = state.phase;
  simulationWorld.dataset.simulationTime = String(playback.time);
  simulationWorld.dataset.simulationFinalTime = String(model.finalTime);
  simulationWorld.dataset.lambda = String(model.lambda);
  simulationWorld.dataset.tension = String(state.tension);
  simulationWorld.dataset.detachmentCount = String(model.detachmentCount);
  simulationWorld.dataset.reattachmentCount = String(model.reattachmentCount);
  simulationWorld.dataset.maximumHeight = String(model.maximumHeight);
  const finalState = model.samples.at(-1);
  simulationWorld.dataset.finalRadiusError = String(
    Math.hypot(finalState.x, finalState.y) - model.radius,
  );

  simulationString.style.height = `${stringLength}px`;
  simulationString.style.width = `${(isRod ? 7 : 5) * inverseScale}px`;
  simulationString.style.borderWidth = `${inverseScale}px`;
  simulationString.style.transform = `translateX(-50%) rotate(${-angle}deg)`;
  simulationString.classList.toggle("is-rod", isRod);
  renderCircularGuide(
    stringLength,
    bodyRadius,
    inverseScale,
    isCircularGuide,
  );
  renderMotionTrail(model, state, inverseScale, showsMotionTrail);
  renderSlackString(
    bodyX,
    bodyY,
    stringLength,
    inverseScale,
    isSlack,
    isString || isRod,
  );

  stringBody.setAttribute("cx", bodyX);
  stringBody.setAttribute("cy", bodyY);
  stringBody.setAttribute("r", bodyRadius);
  stringBody.style.strokeWidth = `${2 * inverseScale}px`;

  fixedPoint.style.width = `${9 * inverseScale}px`;
  fixedPoint.style.height = `${9 * inverseScale}px`;
  fixedPoint.style.borderWidth = `${2 * inverseScale}px`;
  fixedPoint.style.boxShadow = `0 0 0 ${inverseScale}px var(--label-ink)`;
  fixedPoint.hidden = isCircularGuide && !showsGeometricFeatures;
  fixedPointLabel.style.left = `${ORIGIN_X + 14 * inverseScale}px`;
  fixedPointLabel.style.top = `${ORIGIN_Y - 18 * inverseScale}px`;
  fixedPointLabel.hidden = !showsGeometricFeatures;
  applyLabelTransform(fixedPointLabel, `scale(${inverseScale})`);

  massLabel.style.left = `${bodyX}px`;
  massLabel.style.top = `${bodyY + bodyRadius + 8 * inverseScale}px`;
  massLabel.hidden = !showsGeometricFeatures;
  applyLabelTransform(
    massLabel,
    `translate(-50%, 0) scale(${inverseScale})`,
  );

  verticalReference.setAttribute("x1", ORIGIN_X);
  verticalReference.setAttribute("y1", ORIGIN_Y);
  verticalReference.setAttribute("x2", ORIGIN_X);
  verticalReference.setAttribute("y2", ORIGIN_Y + stringLength);
  verticalReference.style.strokeWidth = `${1.3 * inverseScale}px`;
  verticalReference.style.strokeDasharray = `${7 * inverseScale} ${6 * inverseScale}`;
  setSvgLine(
    initialRadiusReference,
    ORIGIN_X,
    ORIGIN_Y,
    initialBodyX,
    initialBodyY,
  );
  initialRadiusReference.style.strokeWidth = `${1.3 * inverseScale}px`;
  initialRadiusReference.style.strokeDasharray = `${7 * inverseScale} ${6 * inverseScale}`;
  setElementVisible(
    initialRadiusReference,
    showsGeometricFeatures && model.phi0 > EVENT_EPSILON,
  );
  setSvgLine(
    currentRadiusReference,
    ORIGIN_X,
    ORIGIN_Y,
    bodyX,
    bodyY,
  );
  currentRadiusReference.style.strokeWidth = `${1.3 * inverseScale}px`;
  currentRadiusReference.style.strokeDasharray = `${7 * inverseScale} ${6 * inverseScale}`;
  setElementVisible(
    currentRadiusReference,
    isCircularGuide &&
      showsGeometricFeatures &&
      state.phase === "taut",
  );
  circularReference.setAttribute("cx", ORIGIN_X);
  circularReference.setAttribute("cy", ORIGIN_Y);
  circularReference.setAttribute("r", stringLength);
  circularReference.style.strokeWidth = `${1.3 * inverseScale}px`;
  circularReference.style.strokeDasharray = `${7 * inverseScale} ${6 * inverseScale}`;
  stringGeometryLayer.toggleAttribute("hidden", !showsGeometricFeatures);
  geometryPointsLayer.toggleAttribute("hidden", !showsGeometricFeatures);
  velocityVectorLayer.toggleAttribute("hidden", !showsVectorFeatures);

  renderVelocityVector(
    bodyX,
    bodyY,
    state.vx,
    state.vy,
    inverseScale,
    playback.time <= EVENT_EPSILON,
    showsVectorFeatures,
  );
  renderHeightGeometry(
    stringLength,
    bodyX,
    bodyY,
    inverseScale,
    showsGeometricFeatures,
  );
  renderAngleGeometry(
    initialAngleArc,
    initialAngleHead,
    initialAngleLabel,
    model.phi0,
    INITIAL_ANGLE_ARC_RADIUS_PX * inverseScale,
    "\\varphi_0",
    inverseScale,
    showsGeometricFeatures && model.phi0 > EVENT_EPSILON,
  );
  renderAngleGeometry(
    currentAngleArc,
    currentAngleHead,
    currentAngleLabel,
    currentAngleRadians,
    CURRENT_ANGLE_ARC_RADIUS_PX * inverseScale,
    "\\varphi",
    inverseScale,
    showsGeometricFeatures &&
      playback.time > EVENT_EPSILON &&
      state.phase === "taut" &&
      (isRod || state.tension > EVENT_EPSILON),
  );
  renderGeometryPoint(
    pointA,
    pointALabel,
    ORIGIN_X,
    ORIGIN_Y + stringLength,
    "A",
    inverseScale,
    showsGeometricFeatures,
  );
  renderGeometryPoint(
    pointB,
    pointBLabel,
    initialBodyX,
    initialBodyY,
    "B",
    inverseScale,
    showsGeometricFeatures && model.phi0 > EVENT_EPSILON,
    8,
  );
  renderGeometryPoint(
    pointGamma,
    pointGammaLabel,
    maximumPointX,
    maximumPointY,
    "H_{\\max}",
    inverseScale,
    showsGeometricFeatures,
    -8,
  );
  renderWeightVector(
    bodyX,
    bodyY,
    angle,
    positionAngleRadians,
    mass,
    model.gravity,
    inverseScale,
    showsVectorFeatures,
    state.phase === "taut" &&
      (isRod || state.tension > EVENT_EPSILON),
  );
  renderTensionVector(
    bodyX,
    bodyY,
    state.tension,
    inverseScale,
    showsVectorFeatures && !isSlack,
    isCircularGuide
      ? "\\vec{N}"
      : isRod
        ? "\\vec{F}_{\\rho}"
        : "\\vec{T}",
    isCircularGuide && state.phase.startsWith("road")
      ? { x: 0, y: -1 }
      : null,
    isRod,
  );
  renderResults(model, state, isCircularGuide, isRod);
  updatePlaybackButtons();
}

function connectParameterControl(range) {
  const numberInput = document.querySelector(`#${range.dataset.pair}`);
  numberInput.dataset.lastValidValue = numberInput.value;

  range.addEventListener("input", () => {
    const stepText = String(range.step);
    const digits = stepText.includes(".") ? stepText.split(".")[1].length : 0;
    numberInput.value = Number(range.value).toFixed(digits);
    numberInput.dataset.lastValidValue = numberInput.value;
    numberInput.setCustomValidity("");
    clearSliderOverflowState(range);
    resetSimulation();
  });

  numberInput.addEventListener("input", () => {
    const value = numericInputValue(numberInput);
    if (!isAllowedParameterValue(range, value)) {
      numberInput.setCustomValidity(parameterValidationMessage(range, value));
      return;
    }

    numberInput.setCustomValidity("");
    numberInput.dataset.lastValidValue = numberInput.value;
    syncSliderToNumberValue(range, value);
    resetSimulation();
  });

  numberInput.addEventListener("change", () => {
    let value = numericInputValue(numberInput);
    if (!isAllowedParameterValue(range, value)) {
      numberInput.value = numberInput.dataset.lastValidValue || range.value;
      value = numericInputValue(numberInput);
    }

    numberInput.setCustomValidity("");
    numberInput.dataset.lastValidValue = numberInput.value;
    syncSliderToNumberValue(range, value);
    resetSimulation();
  });
}

function setTheme(theme, persist = true) {
  root.setAttribute("data-bs-theme", theme);
  themeButtons.forEach((button) => {
    const isActive = button.dataset.theme === theme;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (persist) localStorage.setItem("vertical-loop-lab-theme", theme);
}

function renderView() {
  simulationWorld.style.transform = `translate(${view.x}px, ${view.y}px) scale(${view.scale})`;
  const originScreenX = view.x + ORIGIN_X * view.scale;
  const originScreenY = view.y + ORIGIN_Y * view.scale;
  simulationViewport.style.setProperty("--grid-x", `${originScreenX}px`);
  simulationViewport.style.setProperty("--grid-y", `${originScreenY}px`);
  simulationViewport.style.setProperty(
    "--grid-minor-size",
    `${PIXELS_PER_METER * view.scale}px`,
  );
  simulationViewport.style.setProperty(
    "--grid-major-size",
    `${PIXELS_PER_METER * 5 * view.scale}px`,
  );
  renderSimulation();
}

function resetView() {
  const fitScale = Math.min(
    1,
    (simulationViewport.clientWidth - 32) / WORLD_WIDTH,
    (simulationViewport.clientHeight - 32) / WORLD_HEIGHT,
  );
  view.scale = clamp(fitScale, MIN_VIEW_ZOOM, 1);
  view.x = (simulationViewport.clientWidth - WORLD_WIDTH * view.scale) / 2;
  view.y = (simulationViewport.clientHeight - WORLD_HEIGHT * view.scale) / 2;
  renderView();
}

function zoomViewAt(screenX, screenY, factor) {
  const worldX = (screenX - view.x) / view.scale;
  const worldY = (screenY - view.y) / view.scale;
  const nextScale = clamp(view.scale * factor, MIN_VIEW_ZOOM, MAX_VIEW_ZOOM);

  view.x = screenX - worldX * nextScale;
  view.y = screenY - worldY * nextScale;
  view.scale = nextScale;
  renderView();
}

function applyApplicationZoom() {
  appShell.style.width = `${100 / applicationZoom}vw`;
  appShell.style.height = `${100 / applicationZoom}vh`;
  appShell.style.transform = `scale(${applicationZoom})`;

  const currentIndex = APP_ZOOM_LEVELS.indexOf(applicationZoom);
  zoomOutButton.disabled = currentIndex === 0;
  zoomInButton.disabled = currentIndex === APP_ZOOM_LEVELS.length - 1;
  zoomOutButton.title = `Σμίκρυνση εφαρμογής (${Math.round(applicationZoom * 100)}%)`;
  zoomInButton.title = `Μεγέθυνση εφαρμογής (${Math.round(applicationZoom * 100)}%)`;
}

function changeApplicationZoom(direction) {
  const currentIndex = APP_ZOOM_LEVELS.indexOf(applicationZoom);
  const nextIndex = clamp(
    currentIndex + direction,
    0,
    APP_ZOOM_LEVELS.length - 1,
  );
  applicationZoom = APP_ZOOM_LEVELS[nextIndex];
  applyApplicationZoom();
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch (error) {
    console.warn("Η λειτουργία πλήρους οθόνης δεν είναι διαθέσιμη.", error);
  }
}

function updateFullscreenButton() {
  const isFullscreen = Boolean(document.fullscreenElement);
  const label = isFullscreen ? "Έξοδος από πλήρη οθόνη" : "Πλήρης οθόνη";
  const icon = fullscreenButton.querySelector("i");

  icon.className = `bi ${isFullscreen ? "bi-fullscreen-exit" : "bi-fullscreen"}`;
  fullscreenButton.setAttribute("aria-label", label);
  fullscreenButton.setAttribute("aria-pressed", String(isFullscreen));
  fullscreenButton.title = label;
}

function updatePanelToggle(button, isExpanded, side) {
  const isSettings = side === "settings";
  const action = isExpanded ? "Απόκρυψη" : "Εμφάνιση";
  const panelName = isSettings ? "ρυθμίσεων" : "αποτελεσμάτων";
  const icon = button.querySelector("i");
  const accessibleLabel = `${action} ${panelName}`;

  button.setAttribute("aria-expanded", String(isExpanded));
  button.title = accessibleLabel;
  button.querySelector(".visually-hidden").textContent = accessibleLabel;

  let direction;
  if (stackedMobileLayoutQuery.matches) {
    direction = isExpanded ? "up" : "down";
  } else if (isSettings) {
    direction = isExpanded ? "left" : "right";
  } else {
    direction = isExpanded ? "right" : "left";
  }
  icon.className = `bi bi-chevron-${direction}`;
}

function updatePlaybackButtons() {
  const canAnimate =
    ["string", "circular-guide", "rod"].includes(loopTypeSelect.value) &&
    (playback.model?.finalTime || 0) > 0;
  playButton.disabled = !canAnimate || playback.playing;
  pauseButton.disabled = !playback.playing;
  stepBackwardButton.disabled = !canAnimate || playback.time <= EVENT_EPSILON;
  stepForwardButton.disabled =
    !canAnimate || playback.time >= playback.model.finalTime - EVENT_EPSILON;
}

function pauseSimulation() {
  playback.playing = false;
  playback.lastTimestamp = null;
  if (playback.animationId !== null) cancelAnimationFrame(playback.animationId);
  playback.animationId = null;
  updatePlaybackButtons();
}

function animationFrame(timestamp) {
  if (!playback.playing) return;
  if (playback.lastTimestamp === null) playback.lastTimestamp = timestamp;
  const elapsed = Math.min((timestamp - playback.lastTimestamp) / 1000, 0.1);
  playback.lastTimestamp = timestamp;
  playback.time = clamp(
    playback.time + elapsed,
    0,
    playback.model.finalTime,
  );
  renderSimulation();

  if (playback.time >= playback.model.finalTime - EVENT_EPSILON) {
    pauseSimulation();
    return;
  }
  playback.animationId = requestAnimationFrame(animationFrame);
}

function playSimulation() {
  if (playback.playing || !playback.model || playback.model.finalTime <= 0) {
    return;
  }
  if (playback.time >= playback.model.finalTime - EVENT_EPSILON) {
    playback.time = 0;
  }
  playback.playing = true;
  playback.lastTimestamp = null;
  updatePlaybackButtons();
  playback.animationId = requestAnimationFrame(animationFrame);
}

function stepSimulation(direction) {
  if (!playback.model || playback.model.finalTime <= 0) return;
  pauseSimulation();
  playback.time = clamp(
    playback.time + direction * FRAME_STEP,
    0,
    playback.model.finalTime,
  );
  renderSimulation();
}

function enablePressAndHold(button, direction) {
  let holdDelay = null;
  let repeatTimer = null;
  let pointerHandled = false;

  function stopRepeating() {
    if (holdDelay !== null) clearTimeout(holdDelay);
    if (repeatTimer !== null) clearInterval(repeatTimer);
    holdDelay = null;
    repeatTimer = null;
  }

  function repeatStep() {
    if (button.disabled) {
      stopRepeating();
      return;
    }
    stepSimulation(direction);
  }

  function finishPointerInteraction() {
    stopRepeating();
    setTimeout(() => {
      pointerHandled = false;
    }, 0);
  }

  button.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || button.disabled) return;
    event.preventDefault();
    pointerHandled = true;
    button.setPointerCapture(event.pointerId);
    stepSimulation(direction);
    holdDelay = setTimeout(() => {
      repeatStep();
      repeatTimer = setInterval(repeatStep, 34);
    }, 300);
  });

  button.addEventListener("pointerup", finishPointerInteraction);
  button.addEventListener("pointercancel", finishPointerInteraction);
  button.addEventListener("lostpointercapture", finishPointerInteraction);
  button.addEventListener("click", (event) => {
    if (pointerHandled) {
      pointerHandled = false;
      event.preventDefault();
      return;
    }
    stepSimulation(direction);
  });
}

function resetSimulation() {
  pauseSimulation();
  playback.time = 0;
  playback.model = loopTypeSelect.value === "string"
    ? createStringModel()
    : loopTypeSelect.value === "circular-guide"
      ? createCircularGuideModel()
      : loopTypeSelect.value === "rod"
        ? createRodModel()
        : null;
  renderSimulation();
}

function updateArrangementControls() {
  angleParameterControl.hidden = loopTypeSelect.value === "circular-guide";
}

function restartSimulation() {
  const preservedView = { ...view };
  const preservedApplicationZoom = applicationZoom;
  pauseSimulation();
  playback.time = 0;
  view.x = preservedView.x;
  view.y = preservedView.y;
  view.scale = preservedView.scale;
  applicationZoom = preservedApplicationZoom;
  applyApplicationZoom();
  renderView();
}

simulationViewport.addEventListener(
  "wheel",
  (event) => {
    if (event.ctrlKey) return;
    event.preventDefault();
    const bounds = simulationViewport.getBoundingClientRect();
    const cursorX = (event.clientX - bounds.left) / applicationZoom;
    const cursorY = (event.clientY - bounds.top) / applicationZoom;
    zoomViewAt(cursorX, cursorY, Math.exp(-event.deltaY * 0.0015));
  },
  { passive: false },
);

simulationViewport.addEventListener("pointerdown", (event) => {
  if (
    event.button !== 0 ||
    event.target.closest("button, input, label, select, a")
  ) {
    return;
  }
  event.preventDefault();
  pointer.active = true;
  pointer.id = event.pointerId;
  pointer.x = event.clientX / applicationZoom;
  pointer.y = event.clientY / applicationZoom;
  simulationViewport.classList.add("is-panning");
  simulationViewport.setPointerCapture(event.pointerId);
});

simulationViewport.addEventListener("pointermove", (event) => {
  if (!pointer.active || event.pointerId !== pointer.id) return;
  const pointerX = event.clientX / applicationZoom;
  const pointerY = event.clientY / applicationZoom;
  view.x += pointerX - pointer.x;
  view.y += pointerY - pointer.y;
  pointer.x = pointerX;
  pointer.y = pointerY;
  renderView();
});

function finishPointer(event) {
  if (!pointer.active || event.pointerId !== pointer.id) return;
  pointer.active = false;
  pointer.id = null;
  simulationViewport.classList.remove("is-panning");
}

simulationViewport.addEventListener("pointerup", finishPointer);
simulationViewport.addEventListener("pointercancel", finishPointer);
simulationViewport.addEventListener("lostpointercapture", finishPointer);

settingsPanelToggle.addEventListener("click", () => {
  const isCollapsed = document.body.classList.toggle("settings-panel-collapsed");
  updatePanelToggle(settingsPanelToggle, !isCollapsed, "settings");
});

resultsPanelToggle.addEventListener("click", () => {
  const isCollapsed = document.body.classList.toggle("results-panel-collapsed");
  updatePanelToggle(resultsPanelToggle, !isCollapsed, "results");
});

resetViewButton.addEventListener("click", resetView);
physicsInfoButton.addEventListener("click", () => physicsInfoDialog.showModal());
closePhysicsInfoButton.addEventListener("click", () => physicsInfoDialog.close());
physicsInfoDialog.addEventListener("click", (event) => {
  if (event.target === physicsInfoDialog) physicsInfoDialog.close();
});
fullscreenButton.addEventListener("click", toggleFullscreen);
zoomInButton.addEventListener("click", () => changeApplicationZoom(1));
zoomOutButton.addEventListener("click", () => changeApplicationZoom(-1));
restartButton.addEventListener("click", restartSimulation);
playButton.addEventListener("click", playSimulation);
pauseButton.addEventListener("click", pauseSimulation);
enablePressAndHold(stepBackwardButton, -1);
enablePressAndHold(stepForwardButton, 1);
loopTypeSelect.addEventListener("change", () => {
  updateArrangementControls();
  resetSimulation();
});
geometricFeaturesCheckbox.addEventListener("change", renderSimulation);
vectorFeaturesCheckbox.addEventListener("change", renderSimulation);
motionTrailCheckbox.addEventListener("change", renderSimulation);
document.addEventListener("fullscreenchange", updateFullscreenButton);

window.addEventListener("resize", () => {
  updatePanelToggle(
    settingsPanelToggle,
    !document.body.classList.contains("settings-panel-collapsed"),
    "settings",
  );
  updatePanelToggle(
    resultsPanelToggle,
    !document.body.classList.contains("results-panel-collapsed"),
    "results",
  );
  resetView();
});

const storedTheme = localStorage.getItem("vertical-loop-lab-theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
setTheme(storedTheme || systemTheme, false);
themeButtons.forEach((button) =>
  button.addEventListener("click", () => setTheme(button.dataset.theme)),
);
parameterRanges.forEach(connectParameterControl);
renderStaticLatex();
initializeDraggableSimulationLabels();
updatePanelToggle(settingsPanelToggle, true, "settings");
updatePanelToggle(resultsPanelToggle, true, "results");
applyApplicationZoom();
updateArrangementControls();
resetSimulation();
resetView();
