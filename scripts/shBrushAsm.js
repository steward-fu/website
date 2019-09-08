/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function() {
 typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush() {
    var my_constant = 'STATUS_UNSUCCESSFUL LowPagePriority IRP_MJ_PNP DO_DIRECT_IO IO_NO_INCREMENT IRP_MN_START_DEVICE IRP_MN_REMOVE_DEVICE STATUS_SUCCESS GENERIC_READ GENERIC_WRITE METHOD_BUFFERED IRP_MJ_DEVICE_CONTROL STATUS_PENDING NULL FILE_ANY_ACCESS METHOD_OUT_DIRECT METHOD_IN_DIRECT METHOD_NEITHER FILE_SHARE_READ STATUS_CANCELLED FILE_FLAG_OVERLAPPED DISPATCH_LEVEL KernelMode OPEN_EXISTING FILE_ATTRIBUTE_NORMAL INFINITE THREAD_ALL_ACCESS INVALID_HANDLE_VALUE IRP_MJ_CREATE IRP_MJ_CLOSE IRP_MJ_WRITE IRP_MJ_READ FILE_DEVICE_UNKNOWN Executive FALSE TRUE DO_BUFFERED_IO DO_DEVICE_INITIALIZING';
    var my_keyword = 'struct ends dup push pop end public mov fastcall inc dec movzx if _try _finally endif else elseif proc eax equ ebx ecx edx edi esi movz and or xor call invoke Push Pop local offset addr sizeof PTR not lea add sub while ret reti endp uses endw bl break dl';
    var my_type = 'DRIVER_EXTENSION dword dd db PIRP _IRP IO_STACK_LOCATION PIO_STACK_LOCATION NTSTATUS PKTIMER BOOLEAN LONG PKDPC KDPC PDRIVER_OBJECT KTIMER PUNICODE_STRING PDEVICE_OBJECT DEVICE_OBJECT BYTE word LIST_ENTRY byte UNICODE_STRING PVOID DRIVER_OBJECT DWORD LARGE_INTEGER OVERLAPPED IO_CSQ KSPIN_LOCK PIO_CSQ KIRQL PKIRQL';
    var my_function = 'IoStartTimer IoStopTimer IoAttachDeviceToDeviceStack IoInitializeTimer memset memcpy crt_printf IoDetachDevice IoSkipCurrentIrpStackLocation IoCallDriver KeSetTimerEx KeSetTimer IoMarkIrpPending IoStartPacket KeCancelTimer DeviceIoControl wsprintf sprintf KeInitializeTimer IsListEmpty RemoveHeadList InsertHeadList InitializeListHead KeInitializeDpc IoCsqInsertIrp KeInitializeSpinLock KefReleaseSpinLockFromDpcLevel IoCsqInitialize KfAcquireSpinLock KfReleaseSpinLock CancelIo InsertTailList RemoveEntryList MmGetMdlVirtualAddress CreateEvent WaitForSingleObject IoStartNextPacket ProbeForRead strcpy strcmp CTL_CODE strlen WriteFile StrLen crt_memset MmGetMdlByteCount MmGetSystemAddressForMdlSafe IoGetCurrentProcess ReadFile PsTerminateSystemThread ExitProcess DbgPrint KeDelayExecutionThread PsCreateSystemThread CreateFile ObReferenceObjectByHandle ZwClose KeWaitForSingleObject ObDereferenceObject Sleep SleepEx CloseHandle CTA0 IofCompleteRequest IoGetCurrentIrpStackLocation IoDeleteDevice DriverEntry RtlInitUnicodeString IoCreateDevice IoCreateSymbolicLink IoDeleteSymbolicLink';

    this.regexList = [
      {regex: /^ *;.*/gm, css: 'my_comment'},
      {regex: /^ *\.386.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.code.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.data.*/gm, css: 'my_preprocessor'},
      {regex: /^ *option.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.const.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.model.*/gm, css: 'my_preprocessor'},
      {regex: /^ *include.*/gm, css: 'my_preprocessor'},
      {regex: new RegExp(this.getKeywords(my_type),'gm'), css:'my_type bold'},
      {regex: new RegExp(this.getKeywords(my_keyword),'gm'), css:'my_keyword bold'},
      {regex: new RegExp(this.getKeywords(my_constant),'gm'), css:'my_constant bold'},
      {regex: new RegExp(this.getKeywords(my_function),'gm'), css:'my_function bold'},
    ];
  };

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases  = ['asm', 'assembly', 'assembler'];
  SyntaxHighlighter.brushes.Cpp = Brush;
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
