/**
 * K Exercise Export — Branded PDF Certificate of Completion
 *
 * Uses jsPDF (loaded via CDN) to generate a professional certificate
 * when a student completes an exercise. The certificate includes:
 *   - Course branding (Contract Law, Oranburg)
 *   - Student name (from localStorage or prompt)
 *   - Exercise title, chapter, score
 *   - Date of completion
 *   - Unique completion code for verification
 *
 * The engine calls KExport.addButton(container) from renderSummary().
 */
(function () {
  'use strict';

  var STUDENT_NAME_KEY = 'k-student-name';

  function getName() {
    try { return localStorage.getItem(STUDENT_NAME_KEY) || ''; } catch (e) { return ''; }
  }

  function setName(n) {
    try { localStorage.setItem(STUDENT_NAME_KEY, n.trim()); } catch (e) {}
  }

  /**
   * Generate a short verification code from exercise + student + date.
   * Not cryptographic — just a human-readable fingerprint.
   */
  function verificationCode(slug, name, dateStr) {
    var raw = slug + '|' + name.toLowerCase() + '|' + dateStr;
    var hash = 0;
    for (var i = 0; i < raw.length; i++) {
      hash = ((hash << 5) - hash) + raw.charCodeAt(i);
      hash |= 0;
    }
    return 'K-' + Math.abs(hash).toString(36).toUpperCase().slice(0, 8);
  }

  /**
   * Prompt for student name if not already stored.
   * Returns a Promise that resolves with the name.
   */
  function ensureName() {
    return new Promise(function (resolve) {
      var existing = getName();
      if (existing) { resolve(existing); return; }

      // Build a simple modal prompt
      var overlay = document.createElement('div');
      overlay.className = 'modal';
      overlay.innerHTML =
        '<div class="modal-card" style="max-width:420px;text-align:center">' +
          '<h3 class="modal-title">Export Certificate</h3>' +
          '<p style="margin:0 0 var(--space-md);color:var(--muted)">Enter your name as it should appear on the certificate:</p>' +
          '<input id="k-export-name" type="text" placeholder="Your full name" style="' +
            'width:100%;padding:0.6rem;border:1px solid var(--border);border-radius:var(--radius-sm);' +
            'background:var(--bg-soft);color:var(--text);font-size:1rem;margin-bottom:var(--space-md);box-sizing:border-box">' +
          '<div class="btn-row" style="justify-content:center">' +
            '<button id="k-export-cancel" class="btn-secondary">Cancel</button>' +
            '<button id="k-export-confirm" class="btn-primary">Generate PDF</button>' +
          '</div>' +
        '</div>';
      document.body.appendChild(overlay);

      var input = document.getElementById('k-export-name');
      input.focus();

      function cleanup() { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }

      document.getElementById('k-export-cancel').onclick = function () {
        cleanup();
        resolve('');
      };

      document.getElementById('k-export-confirm').onclick = function () {
        var val = input.value.trim();
        if (!val) { input.style.borderColor = 'var(--red-bright)'; return; }
        setName(val);
        cleanup();
        resolve(val);
      };

      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') document.getElementById('k-export-confirm').click();
        if (e.key === 'Escape') document.getElementById('k-export-cancel').click();
      });
    });
  }

  /**
   * Generate and download a branded PDF certificate.
   */
  function generatePDF(exerciseData, scoreData) {
    ensureName().then(function (name) {
      if (!name) return;

      // jsPDF with default unit mm, A4 landscape for certificate feel
      var doc = new jspdf.jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      var W = 297; // A4 landscape width
      var H = 210; // A4 landscape height

      var now = new Date();
      var dateStr = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      var code = verificationCode(exerciseData.slug, name, dateStr);
      var pct = scoreData.total ? Math.round((scoreData.score / scoreData.total) * 100) : 0;

      // ── Background ──
      doc.setFillColor(26, 26, 46); // dark navy
      doc.rect(0, 0, W, H, 'F');

      // ── Decorative border ──
      doc.setDrawColor(201, 162, 39); // gold
      doc.setLineWidth(1.5);
      doc.roundedRect(10, 10, W - 20, H - 20, 3, 3, 'S');
      doc.setLineWidth(0.5);
      doc.roundedRect(14, 14, W - 28, H - 28, 2, 2, 'S');

      // ── Top corner accents ──
      doc.setDrawColor(139, 30, 30); // deep red
      doc.setLineWidth(0.8);
      // top-left
      doc.line(14, 30, 30, 14);
      doc.line(14, 35, 35, 14);
      // top-right
      doc.line(W - 14, 30, W - 30, 14);
      doc.line(W - 14, 35, W - 35, 14);
      // bottom-left
      doc.line(14, H - 30, 30, H - 14);
      doc.line(14, H - 35, 35, H - 14);
      // bottom-right
      doc.line(W - 14, H - 30, W - 30, H - 14);
      doc.line(W - 14, H - 35, W - 35, H - 14);

      // ── Header ──
      doc.setTextColor(201, 162, 39);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.text('CONTRACT LAW: RULES, CASES, AND PROBLEMS', W / 2, 32, { align: 'center' });

      doc.setFontSize(9);
      doc.setTextColor(160, 160, 180);
      doc.text('Second Edition \u2022 Seth C. Oranburg \u2022 Carolina Academic Press', W / 2, 39, { align: 'center' });

      // ── Title ──
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(28);
      doc.setFont('helvetica', 'bold');
      doc.text('Certificate of Completion', W / 2, 58, { align: 'center' });

      // ── Decorative rule ──
      doc.setDrawColor(201, 162, 39);
      doc.setLineWidth(0.6);
      doc.line(W / 2 - 50, 63, W / 2 + 50, 63);

      // ── "This certifies that" ──
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(180, 180, 200);
      doc.text('This certifies that', W / 2, 75, { align: 'center' });

      // ── Student name ──
      doc.setFontSize(22);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text(name, W / 2, 88, { align: 'center' });

      // ── Underline under name ──
      var nameWidth = doc.getTextWidth(name);
      doc.setDrawColor(201, 162, 39);
      doc.setLineWidth(0.3);
      doc.line(W / 2 - nameWidth / 2 - 5, 91, W / 2 + nameWidth / 2 + 5, 91);

      // ── Completion text ──
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(180, 180, 200);
      doc.text('has successfully completed', W / 2, 102, { align: 'center' });

      // ── Exercise title ──
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(201, 162, 39);
      doc.text(exerciseData.title, W / 2, 114, { align: 'center' });

      // ── Chapter info ──
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(180, 180, 200);
      var chapterLine = exerciseData.kicker || ('Chapter ' + exerciseData.chapterNum);
      doc.text(chapterLine, W / 2, 122, { align: 'center' });

      // ── Score box ──
      var boxW = 70;
      var boxH = 22;
      var boxX = W / 2 - boxW / 2;
      var boxY = 130;
      doc.setFillColor(35, 35, 60);
      doc.setDrawColor(201, 162, 39);
      doc.setLineWidth(0.4);
      doc.roundedRect(boxX, boxY, boxW, boxH, 2, 2, 'FD');

      doc.setFontSize(9);
      doc.setTextColor(160, 160, 180);
      doc.text('SCORE', W / 2, boxY + 7, { align: 'center' });

      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text(scoreData.score + ' / ' + scoreData.total + '  (' + pct + '%)', W / 2, boxY + 17, { align: 'center' });

      // ── Date ──
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(160, 160, 180);
      doc.text('Completed: ' + dateStr, W / 2, 165, { align: 'center' });

      // ── Footer ──
      doc.setFontSize(8);
      doc.setTextColor(120, 120, 140);
      doc.text('Verification: ' + code, W / 2, 180, { align: 'center' });
      doc.text('Contract Law Course Companion \u2022 oranburg.law', W / 2, 186, { align: 'center' });

      // ── Download ──
      var filename = 'K-' + exerciseData.slug + '-certificate.pdf';
      doc.save(filename);
    });
  }

  /**
   * Add the export button to a container element.
   * Called by the engine after rendering the summary.
   */
  function addButton(container) {
    if (!container) return;

    var btn = document.createElement('button');
    btn.className = 'btn-secondary';
    btn.style.cssText = 'margin-top:var(--space-sm);';
    btn.textContent = 'Download Certificate (PDF)';
    btn.onclick = function () {
      if (typeof jspdf === 'undefined') {
        btn.textContent = 'Loading...';
        btn.disabled = true;
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js';
        script.onload = function () {
          btn.textContent = 'Download Certificate (PDF)';
          btn.disabled = false;
          generatePDF(EXERCISE, { score: window._kScore || 0, total: window._kTotal || 0 });
        };
        script.onerror = function () {
          btn.textContent = 'PDF unavailable (offline?)';
          btn.disabled = true;
        };
        document.head.appendChild(script);
      } else {
        generatePDF(EXERCISE, { score: window._kScore || 0, total: window._kTotal || 0 });
      }
    };

    container.appendChild(btn);
  }

  window.KExport = {
    generatePDF: generatePDF,
    addButton: addButton,
    getName: getName,
    setName: setName
  };
})();
