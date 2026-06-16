import {slog} from "./slog.ts"

export function initView(): View {
  // Get references to the necessary HTML elements
  const mathDesc = document.querySelector("#math-desc");
  const mathBtn = document.querySelector("#math");

  const csDesc = document.querySelector("#math-desc");
  const csBtn = document.querySelector("#math");

  const danceDesc = document.querySelector("#math-desc");
  const danceBtn = document.querySelector("#math");

  const artDesc = document.querySelector("#math-desc");
  const artBtn = document.querySelector("#math");

  const travelDesc = document.querySelector("#math-desc");
  const travelBtn = document.querySelector("#math");

  const friendsDesc = document.querySelector("#math-desc");
  const friendsBtn = document.querySelector("#math");

  // Ensure that the elements exist and are of the correct type

  if (!mathDesc || !(mathDesc instanceof HTMLDialogElement)) {
    slog.error("Error: #math-desc is not a Dialog:", { mathDesc });
    throw new Error("math does not exist");
  }

  if (!mathBtn || !(mathBtn instanceof HTMLElement)) {
    slog.error("Error: #math is not a Dialog:", { mathDesc });
    throw new Error("math does not exist");
  }

  if (!csDesc || !(csDesc instanceof HTMLDialogElement)) {
    slog.error("Error: #cs-desc is not a Dialog:", { mathDesc });
    throw new Error("math does not exist");
  }

  if (!csBtn || !(csBtn instanceof HTMLElement)) {
    slog.error("Error: #cs is not a Dialog:", { mathDesc });
    throw new Error("math does not exist");
  }
  if (!danceDesc || !(danceDesc instanceof HTMLDialogElement)) {
    slog.error("Error: #dance-desc is not a Dialog:", { mathDesc });
    throw new Error("dance-desc does not exist");
  }

  if (!danceBtn || !(danceBtn instanceof HTMLElement)) {
    slog.error("Error: #dance is not a Dialog:", { mathDesc });
    throw new Error("dance does not exist");
  }
  if (!artDesc || !(artDesc instanceof HTMLDialogElement)) {
    slog.error("Error: #art-desc is not a Dialog:", { mathDesc });
    throw new Error("art-desc does not exist");
  }

  if (!artBtn || !(artBtn instanceof HTMLElement)) {
    slog.error("Error: #art is not a Dialog:", { mathDesc });
    throw new Error("art does not exist");
  }

  if (!travelDesc || !(travelDesc instanceof HTMLDialogElement)) {
    slog.error("Error: #travel-desc is not a Dialog:", { mathDesc });
    throw new Error("travel-desc does not exist");
  }

  if (!travelBtn || !(travelBtn instanceof HTMLElement)) {
    slog.error("Error: #travel is not a Dialog:", { mathDesc });
    throw new Error("travel does not exist");
  }

  if (!friendsDesc || !(friendsDesc instanceof HTMLDialogElement)) {
    slog.error("Error: #friends-desc is not a Dialog:", { mathDesc });
    throw new Error("friends-desc does not exist");
  }

  if (!friendsBtn || !(friendsBtn instanceof HTMLElement)) {
    slog.error("Error: #friends is not a Dialog:", { mathDesc });
    throw new Error("friends does not exist");
  }


  // Create and return the View instance
  return new View(
    mathDesc,
    mathBtn,
    csDesc,
    csBtn,
    danceDesc,
    danceBtn,
    artDesc,
    artBtn,
    travelDesc,
    travelBtn,
    friendsDesc,
    friendsBtn
  );
}

class View {

  private readonly mathDesc: HTMLDialogElement;
  private readonly csDesc: HTMLDialogElement;
  private readonly danceDesc: HTMLDialogElement;
  private readonly artDesc: HTMLDialogElement;
  private readonly travelDesc: HTMLDialogElement;
  private readonly friendsDesc: HTMLDialogElement;


  private readonly mathBtn: HTMLElement;
  private readonly csBtn: HTMLElement;
  private readonly danceBtn: HTMLElement;
  private readonly artBtn: HTMLElement;
  private readonly travelBtn: HTMLElement;
  private readonly friendsBtn: HTMLElement;
  // The description input element

  // The current logged-in user
  private currentUser = "";
  // The current workspace ID
  private currentWorkspaceId = "";

  constructor(
    mathDesc: HTMLDialogElement,
    mathBtn: HTMLElement,
    csDesc: HTMLDialogElement,
    csBtn: HTMLElement,
    danceDesc: HTMLDialogElement,
    danceBtn: HTMLElement,
    artDesc: HTMLDialogElement,
    artBtn: HTMLElement,
    travelDesc: HTMLDialogElement,
    travelBtn: HTMLElement,
    friendsDesc: HTMLDialogElement,
    friendsBtn: HTMLElement

  ) {
    // Initialize member variables
    this.mathDesc = mathDesc;
    this.mathBtn = mathBtn;
    this.csDesc = csDesc;
    this.csBtn = csBtn;
    this.danceDesc = danceDesc;
    this.danceBtn = danceBtn;
    this.artDesc = artDesc;
    this.artBtn = artBtn;
    this.travelDesc = travelDesc;
    this.travelBtn = travelBtn;
    this.friendsDesc = friendsDesc;
    this.friendsBtn = friendsBtn;

    // Intiialize login button event handler
    this.mathBtn.addEventListener("click", this.openMathDesc.bind(this));
  }

  /**
   * Initializes event handlers for various UI elements.
   */
  private openMathDesc() {
    this.mathDesc.showModal();
  }
}
