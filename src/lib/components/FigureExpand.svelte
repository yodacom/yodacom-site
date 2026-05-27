<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    label?: string;
  }

  let { children, label = 'Expand figure' }: Props = $props();

  let open = $state(false);

  function expand() {
    open = true;
  }

  function close() {
    open = false;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') close();
  }

  function handleTriggerKey(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      expand();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Trigger wrapper -->
<div
  class="figure-expand-trigger"
  role="button"
  tabindex="0"
  aria-label={label}
  onclick={expand}
  onkeydown={handleTriggerKey}
>
  {@render children()}
  <div class="figure-expand-hint" aria-hidden="true">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2h4v4M14 2l-5 5M6 14H2v-4M2 14l5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>expand</span>
  </div>
</div>

<!-- Modal overlay -->
{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="figure-expand-backdrop" onclick={close}>
    <div
      class="figure-expand-modal"
      role="dialog"
      tabindex="-1"
      aria-label={label}
      aria-modal="true"
      onclick={(e) => e.stopPropagation()}
    >
      <button class="figure-expand-close" onclick={close} aria-label="Close expanded figure">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="figure-expand-content">
        {@render children()}
      </div>
    </div>
  </div>
{/if}

<style>
  .figure-expand-trigger {
    position: relative;
    cursor: zoom-in;
    display: block;
  }

  .figure-expand-trigger:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    border-radius: 4px;
  }

  .figure-expand-hint {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    background: rgba(0, 0, 0, 0.65);
    color: rgba(255, 255, 255, 0.85);
    font-size: 11px;
    font-family: system-ui, sans-serif;
    font-weight: 500;
    letter-spacing: 0.04em;
    padding: 5px 9px;
    border-radius: 4px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  .figure-expand-trigger:hover .figure-expand-hint,
  .figure-expand-trigger:focus-visible .figure-expand-hint {
    opacity: 1;
  }

  .figure-expand-backdrop {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.82);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    touch-action: pan-x pan-y pinch-zoom;
  }

  .figure-expand-modal {
    position: relative;
    background: #fff;
    border-radius: 8px;
    max-width: min(1280px, 96vw);
    max-height: 92vh;
    overflow: auto;
    overscroll-behavior: contain;
    touch-action: pan-x pan-y pinch-zoom;
    -webkit-overflow-scrolling: touch;
  }

  :global([data-theme='dark']) .figure-expand-modal,
  :global(.dark) .figure-expand-modal {
    background: #161b22;
  }

  .figure-expand-close {
    position: sticky;
    top: 10px;
    float: right;
    margin: 10px 10px 0 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.12);
    color: #444;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transition: background 0.1s ease;
  }

  .figure-expand-close:hover {
    background: rgba(0, 0, 0, 0.22);
  }

  .figure-expand-content {
    padding: 8px 16px 20px 16px;
  }
</style>
